import React, { useState, useEffect, useRef } from 'react'
import Typewriter from 'typewriter-effect/dist/core'
import TypewriterComponent from '../Typewriter'

import './GameConfig.css'

type Player = '❌' | '⭕️' | string

interface GameConfigProps {
	onStart: (totalRoundsToPlay: number, symbol: Player) => void
	onHandleClickButton: () => void
}

function GameConfig({ onStart, onHandleClickButton }: GameConfigProps) {
	const [totalRoundsToPlay, setTotalGames] = useState(3)
	const [symbol, setSymbol] = useState('')
	const [step, setStep] = useState(1)
	const [label, setLabel] = useState('')
	const [errorMessage, setErrorMessage] = useState('')
	const [showForm, setShowForm] = useState(true)
	/*FORM*/
	const [formData, setFormData] = useState({
		nombre: '',
		representaEmpresa: false,
		nombreEmpresa: '',
		cargo: '',
		email: '',
	})
	const [isLoading, setIsLoading] = useState(false)
	const [errors, setErrors] = useState({})

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setShowForm(false)
		const validationErrors = validateForm()

		if (Object.keys(validationErrors).length === 0) {
			try {
				// Step 1: Authenticate and Obtain Access Token
				const accessToken = await authenticateWithApiKey()

				// Step 2: Insert Document using Access Token
				if (accessToken) {
					const sanitizedFilename = sanitizeFilename('user_data.csv') // Sanitize and add timestamp
					const csvData = {
						data: Object.values(formData).join(','),
						filename: sanitizedFilename,
					}

					const postData = {
						dataSource: 'Cluster0',
						collection: 'csvData',
						database: 'tictactoe',
						document: csvData,
					}

					const insertionResult = await insertDocument(
						postData,
						accessToken,
					)
					console.log(
						'Document inserted successfully:',
						insertionResult,
					)

					setIsLoading(false) // Hide loading state
					setFormData({
						nombre: '',
						representaEmpresa: false,
						nombreEmpresa: '',
						cargo: '',
						email: '',
					})
					setShowForm(false)
				}
			} catch (error) {
				console.error('Error submitting form or sending data:', error)
				// Handle errors accordingly, e.g., setErrors or display error message
			}
		} else {
			setErrors(validationErrors)
		}
	}

	// Function to authenticate using API key and obtain access token
	const authenticateWithApiKey = async () => {
		const authHeaders = new Headers()
		authHeaders.append('Content-Type', 'application/json')

		const authRaw = JSON.stringify({
			key: 's8QHGkHLPusaUszTrgAISLsymasmQmiufxYlctngOsERSgHuffrXMhcTmdhHT9ki',
		})

		const authRequestOptions = {
			method: 'POST',
			headers: authHeaders,
			body: authRaw,
			redirect: 'follow',
		}

		try {
			const response = await fetch(
				'https://services.cloud.mongodb.com/api/client/v2.0/app/data-eviphyj/auth/providers/api-key/login',
				authRequestOptions,
			)

			if (!response.ok) {
				throw new Error('Failed to authenticate')
			}

			const authResult = await response.json()
			return authResult.access_token // Return the access token
		} catch (error) {
			console.error('Error authenticating with API key:', error)
			throw error // Propagate the error
		}
	}

	// Function to insert a document using the access token
	const insertDocument = async (postData, accessToken) => {
		const myHeaders = new Headers()
		myHeaders.append('Authorization', `Bearer ${accessToken}`)
		myHeaders.append('Content-Type', 'application/json')

		const raw = JSON.stringify(postData)

		const requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow',
		}

		try {
			const response = await fetch(
				'https://data.mongodb-api.com/app/data-eviphyj/endpoint/data/v1/action/insertOne',
				requestOptions,
			)

			if (!response.ok) {
				throw new Error('Failed to insert document')
			}

			const insertionResult = await response.json()
			return insertionResult // Return insertion result if needed
		} catch (error) {
			console.error('Error inserting document:', error)
			throw error // Propagate the error
		}
	}

	function sanitizeFilename(filename) {
		// Remove invalid characters or replace them with underscores
		return filename.replace(/[^a-z0-9_.-]/gi, '_')
	}

	const validateForm = () => {
		const errors = {}
		if (!formData.nombre.trim()) {
			errors.nombre = 'El nombre es obligatorio'
		}
		if (!formData.email.trim()) {
			errors.email = 'El email es obligatorio'
		} else if (!validateEmail(formData.email)) {
			errors.email = 'El formato del email es incorrecto'
		}
		if (formData.representaEmpresa && !formData.nombreEmpresa.trim()) {
			errors.nombreEmpresa = 'El nombre de la empresa es obligatorio'
		}
		return errors
	}

	const validateEmail = (email) => {
		// Basic email validation using a regex pattern
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return re.test(email)
	}
	/*END FORM*/
	const labels = [
		'¿Cuántas rondas hasta que reclames la victoria?',
		'¿Te atreves a establecer un número de rondas que ganarás?',
		'Reto aceptado: ¿Cuántas rondas ganarás?',
		'¿Cuántas rondas puedes aguantar contra la IA?',
		'Demuestra tus habilidades: ¿Cuántas rondas dominarás?',
		'¿Cuántas rondas tomará para probar tu valentía?',
		'Establece tu objetivo: ¿Cuántas rondas ganarás?',
		'La IA te espera: ¿Cuántas rondas puedes ganar?',
		'Muestra tu destreza: ¿En cuántas rondas triunfarás?',
		'¿Cuántas rondas hasta que seas superior a la IA?',
		'Supérate: ¿Cuántas rondas puedes ganar?',
		'¿Cuántas rondas te tomará superar a la IA?',
		'Prepárate: ¿Cuántas rondas necesitas para la victoria?',
		'¿Cuántas rondas sobrevivirás contra la IA?',
		'¿Cuántas rondas hasta que logres la victoria?',
		'Supera tus límites: ¿En cuántas rondas ganarás?',
		'Establece tu objetivo: ¿En Cuántas rondas ganarás?',
		'¿Cuántas rondas te tomará para vencer a la IA?',
		'Muestra tu estrategia: ¿Cuántas rondas ganarás?',
		'¿En cuántas rondas te reclamarás como campeón?',
	]

	const typewriterRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setLabel(labels[Math.floor(Math.random() * labels.length)])

		if (typewriterRef.current) {
			new Typewriter(typewriterRef.current, {
				strings: labels,
				autoStart: true,
				loop: true,
				pauseFor: 10000,
			})
		}
	}, [])

	const handleStart = () => {
		if (totalRoundsToPlay > 0 && symbol) {
			onHandleClickButton()
			onStart(totalRoundsToPlay, symbol)
		} else {
			setErrorMessage('Please select a player!!!')
		}
	}
	const handleSliderChange = (e) => {
		setTotalGames(parseInt(e.target.value))
	}

	return !showForm ? (
		<section className="gameContainerConfig">
			<div className="game-config">
				<p>
					{' '}
					<img
						src="./Globant-LightBG-Color.png"
						className="logo"
						alt="React logo"
					/>
				</p>
				<h1>¡Nueva Partida!</h1>
				<div className={step === 1 ? 'bouncein' : 'hidden'}>
					<TypewriterComponent text={labels} />
					<div>
						<p className="roundLabels">
							<span>{totalRoundsToPlay}</span>
						</p>
						<input
							type="range"
							id="roundsSlider"
							value={totalRoundsToPlay}
							onChange={handleSliderChange}
							min="3"
							max="7"
							step="2"
						/>
						<br />
						<label htmlFor="roundsSlider">Rondas</label>
					</div>
					<p>
						<button onClick={() => setStep(2)} className="btnYep">
							Siguiente
						</button>
						<br />
					</p>
				</div>
				<div className={step === 2 ? 'bouncein' : 'hidden'}>
					<h2>Selecciona jugador</h2>
					<button
						className={
							symbol === '❌' ? 'btnSelected' : 'btnPlayer'
						}
						onClick={() => {
							setSymbol('❌')
							setErrorMessage('')
						}}
					>
						❌
					</button>
					<button
						className={
							symbol === '⭕️' ? 'btnSelected' : 'btnPlayer'
						}
						onClick={() => {
							setSymbol('⭕️')
							setErrorMessage('')
						}}
					>
						⭕️
					</button>
					<p>
						{errorMessage && (
							<span className="error error-message">
								{' '}
								⛔️ {errorMessage}
							</span>
						)}
					</p>
					<p>
						<button onClick={handleStart} className="btnYep">
							¡Comenzar!
						</button>
						<br />
					</p>
					<p>
						<button onClick={() => setStep(1)} className="btnNoup">
							{' '}
							⬅️ Regresar
						</button>
						<br />
					</p>
				</div>
			</div>
		</section>
	) : (
		<>
			<p>
				{' '}
				<img
					src="./Globant-LightBG-Color.png"
					className="logo"
					alt="React logo"
				/>
			</p>
			<p>Para continuar ingresa tus datos</p>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="nombre">Nombre*</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						value={formData.nombre}
						onChange={handleChange}
						className="textField"
					/>
					{errors.nombre && (
						<span className="error">{errors.nombre}</span>
					)}
				</div>

				<div>
					<label htmlFor="email">Email*</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="textField"
					/>
					{errors.email && (
						<span className="error">{errors.email}</span>
					)}
				</div>
				<div>
					<label htmlFor="representaEmpresa">
						¿Representas alguna empresa?
					</label>

					<input
						type="checkbox"
						id="representaEmpresa"
						name="representaEmpresa"
						checked={formData.representaEmpresa}
						onChange={handleChange}
					/>
					<br />
				</div>

				{formData.representaEmpresa && (
					<>
						<br />
						<div>
							<label htmlFor="nombreEmpresa">
								Nombre de la empresa:
							</label>
							<input
								type="text"
								id="nombreEmpresa"
								name="nombreEmpresa"
								value={formData.nombreEmpresa}
								onChange={handleChange}
								className="textField"
							/>
							{errors.nombreEmpresa && (
								<span className="error">
									{errors.nombreEmpresa}
								</span>
							)}
						</div>
						<div>
							<label htmlFor="cargo">Cargo:</label>
							<input
								type="text"
								id="cargo"
								name="cargo"
								value={formData.cargo}
								onChange={handleChange}
								className="textField"
							/>
						</div>
					</>
				)}
				<br />
				<button type="submit" className="btnYep">
					{isLoading ? 'Guardando...' : 'Enviar'}
				</button>
			</form>
		</>
	)
}

export default GameConfig
