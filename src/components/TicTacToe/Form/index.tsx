import React, { useState } from 'react'

function Form() {
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
		const validationErrors = validateForm()

		if (Object.keys(validationErrors).length === 0) {
			const sanitizedFilename = sanitizeFilename('user_data.csv') // Sanitize and add timestamp
			const csvData = {
				data: Object.values(formData).join(','),
				filename: sanitizedFilename,
			}

			try {
				const response = await fetch(
					'http://localhost:3001/save-to-csv',
					{
						// Replace with your actual API endpoint
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(csvData),
					},
				)

				if (response.ok) {
					setIsLoading(false) // Hide loading state
					setFormData({
						nombre: '',
						representaEmpresa: false,
						nombreEmpresa: '',
						cargo: '',
						email: '',
					})

					console.log('CSV data sent to server successfully')
					// Clear form fields or show success message
				} else {
					const errorData = await response.json()
					console.error(
						'Error saving data:',
						errorData.errors || 'Unknown error',
					)
				}
			} catch (error) {
				console.error('Error submitting form or sending data:', error)
			}
		} else {
			setErrors(validationErrors)
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

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="nombre">Nombre:</label>
					<input
						type="text"
						id="nombre"
						name="nombre"
						value={formData.nombre}
						onChange={handleChange}
					/>
					{errors.nombre && <span>{errors.nombre}</span>}
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
				</div>

				{formData.representaEmpresa && (
					<>
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
							/>
							{errors.nombreEmpresa && (
								<span>{errors.nombreEmpresa}</span>
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
							/>
						</div>
					</>
				)}

				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
					{errors.email && <span>{errors.email}</span>}
				</div>

				<button type="submit" disabled={isLoading}>
					{isLoading ? 'Saving...' : 'Submit'}
				</button>
			</form>
		</>
	)
}

export default Form
