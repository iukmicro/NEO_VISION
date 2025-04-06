"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "LASIK Patient",
      image: "/placeholder.svg?height=100&width=100&text=Sarah+J",
      quote:
        "The LASIK procedure at NEO VISION changed my life. I can now see clearly without glasses for the first time in 20 years. The staff was professional and caring throughout the entire process.",
    },
    {
      name: "Michael Chen",
      role: "Regular Patient",
      image: "/placeholder.svg?height=100&width=100&text=Michael+C",
      quote:
        "I've been coming to NEO VISION for my annual eye exams for 5 years now. The technology they use is cutting-edge, and Dr. Williams always takes the time to explain everything thoroughly.",
    },
    {
      name: "Emily Rodriguez",
      role: "Pediatric Patient Parent",
      image: "/placeholder.svg?height=100&width=100&text=Emily+R",
      quote:
        "Finding an eye doctor who is good with kids was so important to us. The team at NEO VISION made my daughter feel comfortable and turned what could have been a scary experience into a fun one.",
    },
  ]

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setCurrent((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 6000)

    return () => {
      resetTimeout()
    }
  }, [current, testimonials.length])

  const next = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }

  const prev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }

  return (
    <section id="testimonials" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied patients about their experiences at NEO VISION EYE
            CENTER.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-none shadow-lg bg-white">
                    <CardContent className="p-8">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-orange-300">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                        <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                        <p className="text-sm text-blue-400">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 shadow-md hover:bg-blue-50 z-10 hidden md:flex"
            onClick={prev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-200 shadow-md hover:bg-blue-50 z-10 hidden md:flex"
            onClick={next}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
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

