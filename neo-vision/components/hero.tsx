"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import { motion } from "framer-motion"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
    }[] = []

    const createParticles = () => {
      const particleCount = Math.floor(window.innerWidth / 20)

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(173, 216, 230, ${Math.random() * 0.5 + 0.1})`,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
        })
      }
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-0 opacity-30">
        <img
          src="eye_scanning.jpg/?height=1200&width=2000&text=Eye+Care+Hero+Image"
          alt="Eye care hero background"
          className="w-full h-full object-cover"
        />
      </div>
      <Header />
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Clear Vision, <span className="text-blue-400">Brighter</span> Future
            </h1>
            {/* <div className="relative mx-auto w-64 h-64 mb-8">
              <img
                src="/spects.jpg?height=400&width=400&text=3D+Eye+Model"
                alt="3D eye model"
                className="w-full h-full object-contain"
              />
            </div> */}
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Experience the future of eye care with cutting-edge technology and compassionate service at NEO VISION EYE
              CENTER.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
                Book Appointment
              </Button>
              <Button variant="outline" className="border-blue-300 text-blue-500 hover:bg-blue-50 px-8 py-6 text-lg">
                Explore Services
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  )
}

