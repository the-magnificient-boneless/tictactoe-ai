import React, { useEffect, useRef } from 'react'
import './ParticlesEffect.css' // Adjust the path as necessary

function ParticlesEffect() {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')
		let particles = []
		const particleCount = 300
		const maxParticleSize = 5
		const minParticleSize = 2
		const speedMultiplier = 0.8

		const resizeCanvas = () => {
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight
		}

		const createParticles = () => {
			for (let i = 0; i < particleCount; i++) {
				particles.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					size:
						Math.random() * (maxParticleSize - minParticleSize) +
						minParticleSize,
					speedX: (Math.random() - 0.5) * speedMultiplier,
					speedY: (Math.random() - 0.5) * speedMultiplier,
					color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`,
				})
			}
		}

		const animateParticles = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)

			particles.forEach((particle) => {
				particle.x += particle.speedX
				particle.y += particle.speedY
				particle.size *= 0.99

				ctx.fillStyle = particle.color
				ctx.beginPath()
				ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
				ctx.fill()

				if (particle.size <= 0.5) {
					particle.x = Math.random() * canvas.width
					particle.y = Math.random() * canvas.height
					particle.size =
						Math.random() * (maxParticleSize - minParticleSize) +
						minParticleSize
					particle.speedX = (Math.random() - 0.5) * speedMultiplier
					particle.speedY = (Math.random() - 0.5) * speedMultiplier
					particle.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${Math.random()})`
				}
			})

			requestAnimationFrame(animateParticles)
		}

		resizeCanvas()
		createParticles()
		animateParticles()

		window.addEventListener('resize', resizeCanvas)

		return () => {
			window.removeEventListener('resize', resizeCanvas)
			particles = []
		}
	}, []) // Empty dependency array to run effect once on mount

	return (
		<div className="particles-container">
			<canvas ref={canvasRef} />
		</div>
	)
}

export default ParticlesEffect
