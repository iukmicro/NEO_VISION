"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Eye, Zap, Baby, Search, Glasses, Activity } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      icon: <Search className="h-12 w-12" />,
      title: "Eye Scanning",
      description: "Comprehensive eye examinations using advanced diagnostic technology.",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "LASIK Surgery",
      description: "State-of-the-art laser vision correction for freedom from glasses.",
    },
    {
      icon: <Eye className="h-12 w-12" />,
      title: "PRK",
      description: "Photorefractive keratectomy for patients who may not be candidates for LASIK.",
    },
    {
      icon: <Baby className="h-12 w-12" />,
      title: "Pediatric Eye Care",
      description: "Specialized care for children's vision development and eye health.",
    },
    {
      icon: <Glasses className="h-12 w-12" />,
      title: "Prescription Eyewear",
      description: "Custom-fitted glasses and contact lenses with the latest lens technology.",
    },
    {
      icon: <Activity className="h-12 w-12" />,
      title: "Eye Disease Management",
      description: "Treatment and monitoring for conditions like glaucoma, cataracts, and macular degeneration.",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of eye care services using the latest technology and techniques.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg border-2 border-transparent hover:border-blue-200">
                <CardContent className="p-6">
                  <div className="mb-6 rounded-lg overflow-hidden">
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(service.title)}`}
                      alt={`${service.title} service`}
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <div className="relative mb-6 mx-auto w-20 h-20 flex items-center justify-center">
                    <div
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        hoveredIndex === index ? "bg-orange-100 scale-110" : "bg-blue-50"
                      }`}
                    ></div>
                    <div
                      className={`relative z-10 transition-all duration-300 ${
                        hoveredIndex === index ? "text-orange-500 scale-110" : "text-blue-400"
                      }`}
                    >
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
                  <p className="text-gray-600 text-center">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

