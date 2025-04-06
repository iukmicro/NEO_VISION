"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { CheckCircle, Award, Users } from "lucide-react"

export default function AboutUs() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  const achievements = [
    {
      icon: <CheckCircle className="h-10 w-10 text-orange-500" />,
      title: "10+ Years of Experience Doctors",
      description: "Providing exceptional eye care services.",
    },
    {
      icon: <Award className="h-10 w-10 text-orange-500" />,
      title: "Award-Winning Care",
      description: "Recognized for our commitment to patient satisfaction and clinical excellence.",
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: "Expert Team",
      description: "Our specialists are leaders in the field of ophthalmology.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-blue-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/placeholder.svg?height=800&width=800')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About NEO VISION</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At NEO VISION EYE CENTER, we combine cutting-edge technology with compassionate care to provide the best
            possible outcomes for our patients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div style={{ y }}>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-200 rounded-full opacity-50"></div>
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/spects.jpg?height=600&=800&text=Modern+Eye+Clinic"
                  alt="Modern eye clinic interior"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Journey</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2025, NEO VISION EYE CENTER has grown from a small clinic to a state-of-the-art facility
                equipped with the latest technology and staffed by leading specialists in the field.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to improve the quality of life for our patients through enhanced vision. We are committed
                to providing personalized care and innovative solutions for all your eye care needs.
              </p>

              <div className="space-y-6">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

