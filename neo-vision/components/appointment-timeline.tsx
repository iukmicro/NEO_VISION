"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, FileText, CheckCircle, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AppointmentTimeline() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      icon: <Calendar className="h-10 w-10" />,
      title: "Choose Date",
      description: "Select your preferred date and time for the appointment.",
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Fill Details",
      description: "Provide your personal information and eye care history.",
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: "Confirm Slot",
      description: "Review and confirm your appointment details.",
    },
    {
      icon: <Bell className="h-10 w-10" />,
      title: "Get Reminder",
      description: "Receive confirmation and reminders via email or SMS.",
    },
  ]

  return (
    <section id="appointment" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Appointment Process</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Booking an appointment with us is quick and easy. Follow these simple steps to get started.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop timeline */}
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute left-0 right-0 top-1/2 h-1 bg-blue-100 -translate-y-1/2"></div>
              <div className="flex justify-between relative z-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                    onMouseEnter={() => setActiveStep(index)}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                        activeStep >= index ? "bg-orange-500 text-white" : "bg-blue-100 text-blue-400"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 text-center max-w-[200px]">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div
                  className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                    index <= activeStep ? "bg-orange-500 text-white" : "bg-blue-100 text-blue-400"
                  }`}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg">
              Schedule Your Appointment
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

