import React, { useState, useEffect, useRef, useCallback } from 'react'
import './RainEffect.css'

function RainDrop({ left, bottom, delay }) {
	return (
		<div
			className="drop"
			style={{ left, bottom, animationDelay: `${delay}s` }}
		>
			<div className="stem" style={{ animationDelay: `${delay}s` }} />
			<div className="splat" style={{ animationDelay: `${delay}s` }} />
		</div>
	)
}

function RainEffect() {
	const [showSplats, setShowSplats] = useState(true)
	const [showBackRow, setShowBackRow] = useState(true)
	const [drops, setDrops] = useState([])
	const [ripples, setRipples] = useState([])
	const canvasRef = useRef(null)

	useEffect(() => {
		const newDrops = []
		for (let i = 0; i < 100; i += Math.floor(Math.random() * 3) + 2) {
			const randoHundo = Math.floor(Math.random() * 98) + 1
			const randoFiver = Math.floor(Math.random() * 3) + 2

			newDrops.push(
				<RainDrop
					key={i}
					left={`${i}%`}
					bottom={`${randoFiver * 2 - 1 + 100}%`}
					delay={randoHundo / 100}
				/>,
			)

			if (showBackRow) {
				newDrops.push(
					<RainDrop
						key={i + 'back'}
						left={`calc(100% - ${i}%)`}
						bottom={`${randoFiver * 2 - 1 + 100}%`}
						delay={randoHundo / 100}
					/>,
				)
			}
		}
		setDrops(newDrops)
	}, [showBackRow])

	const animateRipples = useCallback(
		(ctx, canvas) => {
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			setRipples((prevRipples) =>
				prevRipples
					.filter((ripple) => ripple.radius < canvas.height / 2)
					.map((ripple) => ({
						...ripple,
						radius: ripple.radius + 2,
						opacity: Math.max(0, ripple.opacity - 0.02),
					})),
			)

			ripples.forEach((ripple) => {
				handleHitGround(ripple.x)
				ctx.beginPath()
				ctx.arc(ripple.x, canvas.height, ripple.radius, 0, 2 * Math.PI)
				ctx.strokeStyle = `rgba(173, 216, 230, ${ripple.opacity})`
				ctx.stroke()
			})
		},
		[ripples],
	)

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')

		const animationFrameId = requestAnimationFrame(() =>
			animateRipples(ctx, canvas),
		)

		return () => cancelAnimationFrame(animationFrameId)
	}, [animateRipples])

	const handleHitGround = (x) => {
		setRipples((prevRipples) => [
			...prevRipples,
			{ x, radius: 10, opacity: 0.8 },
		])
	}

	return (
		<div className="containerRaining">
			<canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
			{drops}
		</div>
	)
}

export default RainEffect
