'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react"

export default function CreativeContact() {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setActiveStep(3) // Move to thank you step
  }

  const steps = [
    { title: "What's your name?", field: 'name' },
    { title: "What's your email?", field: 'email' },
    { title: "What's your message?", field: 'message' },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#2581f3] to-[#fcfcfd] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-4xl">
        <h2 className="text-4xl font-bold text-[#0a274c] mb-8 text-center">Let's Work Together</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              {activeStep < 3 ? (
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold text-[#2581f3] mb-4">{steps[activeStep].title}</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {steps[activeStep].field === 'message' ? (
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-[#35806e] rounded-lg focus:ring-2 focus:ring-[#f89820] outline-none"
                        rows={4}
                        required
                      />
                    ) : (
                      <input
                        type={steps[activeStep].field === 'email' ? 'email' : 'text'}
                        name={steps[activeStep].field}
                        value={formData[steps[activeStep].field]}
                        onChange={handleInputChange}
                        className="w-full p-3 border-2 border-[#35806e] rounded-lg focus:ring-2 focus:ring-[#f89820] outline-none"
                        required
                      />
                    )}
                    <div className="flex justify-between items-center">
                      {activeStep > 0 && (
                        <button
                          type="button"
                          onClick={() => setActiveStep(activeStep - 1)}
                          className="text-[#2581f3] hover:text-[#f89820] transition-colors"
                        >
                          Back
                        </button>
                      )}
                      <button
                        type={activeStep === 2 ? 'submit' : 'button'}
                        onClick={() => activeStep < 2 && setActiveStep(activeStep + 1)}
                        className="bg-[#f89820] text-white px-6 py-2 rounded-full hover:bg-[#e88710] transition-colors flex items-center"
                      >
                        {activeStep === 2 ? 'Send' : 'Next'}
                        <ChevronRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-semibold text-[#2581f3] mb-4">Thank you!</h3>
                  <p className="text-[#0a274c]">We'll get back to you soon.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="space-y-6">
            <div className="bg-[#fcfcfd] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0a274c] mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-[#35806e] w-5 h-5" />
                  <p className="text-[#0a274c]">123 Innovation Street, Tech City, 54321</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-[#35806e] w-5 h-5" />
                  <p className="text-[#0a274c]">(123) 456-7890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-[#35806e] w-5 h-5" />
                  <p className="text-[#0a274c]">contact@example.com</p>
                </div>
              </div>
            </div>
            <div className="bg-[#fcfcfd] p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0a274c] mb-4">Our Location</h3>
              <div className="aspect-video bg-[#2581f3] rounded-lg flex items-center justify-center">
                <MapPin className="text-white w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}