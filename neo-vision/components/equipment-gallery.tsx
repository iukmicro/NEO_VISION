"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EquipmentGallery() {
  const [current, setCurrent] = useState(0)

  const equipment = [
    {
      name: "Advanced Eye Scanner",
      description:
        "Our state-of-the-art eye scanning technology provides detailed imaging of your retina and optic nerve.",
      image: "/placeholder.svg?height=600&width=800&text=Eye+Scanner+Equipment",
    },
    {
      name: "LASIK Technology",
      description: "The latest LASIK equipment for precise and safe vision correction procedures.",
      image: "/placeholder.svg?height=600&width=800&text=LASIK+Equipment",
    },
    {
      name: "Diagnostic Suite",
      description: "Comprehensive diagnostic tools to accurately assess your vision and eye health.",
      image: "/placeholder.svg?height=600&width=800&text=Diagnostic+Equipment",
    },
    {
      name: "Pediatric Eye Testing",
      description: "Kid-friendly equipment designed to make eye exams fun and comfortable for our youngest patients.",
      image: "/placeholder.svg?height=600&width=800&text=Pediatric+Equipment",
    },
  ]

  const next = () => {
    setCurrent(current === equipment.length - 1 ? 0 : current + 1)
  }

  const prev = () => {
    setCurrent(current === 0 ? equipment.length - 1 : current - 1)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Advanced Equipment</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We invest in the latest technology to provide you with the best possible eye care experience.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto relative">
          <div className="overflow-hidden rounded-xl shadow-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {equipment.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                    >
                      <ZoomIn className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md hover:bg-blue-50 z-10"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-sm border border-gray-200 shadow-md hover:bg-blue-50 z-10"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="flex justify-center mt-8 gap-2">
            {equipment.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === index ? "bg-orange-500 w-6" : "bg-blue-200"
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

