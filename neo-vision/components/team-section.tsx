"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

export default function TeamSection() {
  const team = [
    {
      name: "Dr. Sarah Williams",
      role: "Chief Ophthalmologist",
      bio: "Dr. Williams has over 15 years of experience in ophthalmology with a specialization in LASIK and cataract surgery.",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Williams",
    },
    {
      name: "Dr. Michael Chen",
      role: "Pediatric Specialist",
      bio: "Dr. Chen focuses on children's eye health and has pioneered several techniques for early vision problem detection.",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Chen",
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Retina Specialist",
      bio: "Dr. Rodriguez is an expert in retinal diseases and treatments, with numerous published research papers.",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Rodriguez",
    },
    {
      name: "Dr. James Wilson",
      role: "Optometrist",
      bio: "Dr. Wilson specializes in comprehensive eye exams and fitting patients with the perfect corrective lenses.",
      image: "/placeholder.svg?height=400&width=400&text=Dr.+Wilson",
    },
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Specialists</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team of experienced eye care professionals is dedicated to providing you with the highest quality of
            care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-none shadow-lg h-full">
                <div className="relative overflow-hidden group">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-center space-x-4">
                      <Link
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      >
                        <Twitter className="h-4 w-4" />
                      </Link>
                      <Link
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

