import React, { useEffect, useRef } from 'react'
import './fireworks.css'

interface FireworkType {
	x: number
	y: number
	sx: number
	sy: number
	size: number
	r: number
	g: number
	b: number
	shouldExplode: boolean
	update(): void
	draw(ctx: CanvasRenderingContext2D): void
}

interface ParticleType {
	x: number
	y: number
	sx: number
	sy: number
	r: number
	g: number
	b: number
	size: number
	life: number
	update(): void
	draw(ctx: CanvasRenderingContext2D): void
}

const Fireworks: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)
	const fireworksRef = useRef<FireworkType[]>([])
	const particlesRef = useRef<ParticleType[]>([])
	const reqRef = useRef<number | null>(null)

	class Firework implements FireworkType {
		x: number
		y: number
		sx: number
		sy: number
		size: number
		r: number
		g: number
		b: number
		shouldExplode: boolean

		constructor() {
			this.x = Math.random() * window.innerWidth
			this.y = window.innerHeight

			this.sx = Math.random() * 3 - 1.5
			this.sy = Math.random() * -3 - 3
			this.size = Math.random() * 2 + 1
			const colorVal = Math.round(0xffffff * Math.random())
			;[this.r, this.g, this.b] = [
				colorVal >> 16,
				(colorVal >> 8) & 255,
				colorVal & 255,
			]
			this.shouldExplode = false
		}

		update() {
			this.shouldExplode =
				this.sy >= -2 ||
				this.y <= 100 ||
				this.x <= 0 ||
				this.x >= window.innerWidth
			this.sy += 0.01
			this.x += this.sx
			this.y += this.sy
		}

		draw(ctx: CanvasRenderingContext2D) {
			ctx.fillStyle = `rgb(${this.r},${this.g},${this.b})`
			ctx.beginPath()
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
			ctx.fill()
		}
	}

	class Particle implements ParticleType {
		x: number
		y: number
		sx: number
		sy: number
		r: number
		g: number
		b: number
		size: number
		life: number

		constructor(x: number, y: number, r: number, g: number, b: number) {
			this.x = x
			this.y = y
			this.sx = Math.random() * 3 - 1.5
			this.sy = Math.random() * 3 - 1.5
			this.r = r
			this.g = g
			this.b = b
			this.size = Math.random() * 2 + 1
			this.life = 100
		}

		update() {
			this.x += this.sx
			this.y += this.sy
			this.life -= 1
		}

		draw(ctx: CanvasRenderingContext2D) {
			ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.life / 100})`
			ctx.beginPath()
			ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
			ctx.fill()
		}
	}

	const animate = (ctx: CanvasRenderingContext2D) => {
		ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'
		ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
		if (Math.random() < 0.25) {
			fireworksRef.current.push(new Firework())
		}

		fireworksRef.current = fireworksRef.current.filter((firework) => {
			firework.update()
			firework.draw(ctx)
			if (firework.shouldExplode) {
				for (let j = 0; j < 50; j++) {
					particlesRef.current.push(
						new Particle(
							firework.x,
							firework.y,
							firework.r,
							firework.g,
							firework.b,
						),
					)
				}
				return false
			}
			return true
		})

		particlesRef.current = particlesRef.current.filter((particle) => {
			particle.update()
			particle.draw(ctx)
			return particle.life > 0
		})

		reqRef.current = requestAnimationFrame(() => animate(ctx))
	}

	useEffect(() => {
		const canvas = canvasRef.current
		if (canvas) {
			const ctx = canvas.getContext('2d')!
			canvas.width = window.innerWidth
			canvas.height = window.innerHeight

			const handleResize = () => {
				canvas.width = window.innerWidth
				canvas.height = window.innerHeight
			}

			window.addEventListener('resize', handleResize)

			animate(ctx)

			return () => {
				window.removeEventListener('resize', handleResize)
				if (reqRef.current) {
					cancelAnimationFrame(reqRef.current)
				}
			}
		}
	}, [])

	return <canvas ref={canvasRef} id="fireworksCanvas" />
}

export default Fireworks
