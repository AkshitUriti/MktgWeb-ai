'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CreativeContactComponent() {
  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setActiveStep(4) // Move to thank you step
  }

  const steps = [
    { title: "What's your name?", field: 'name' },
    { title: "What's your email?", field: 'email' },
    { title: "What's your phone number?", field: 'phone' },
    { title: "What's your message?", field: 'message' },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container px-4 md:px-6">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-purple-700">Let's Work Together</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {activeStep < 4 ? (
                    <motion.div
                      key={activeStep}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-semibold text-purple-600 mb-4">{steps[activeStep].title}</h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {steps[activeStep].field === 'message' ? (
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full"
                            rows={4}
                            required
                          />
                        ) : (
                          <Input
                            type={steps[activeStep].field === 'email' ? 'email' : steps[activeStep].field === 'phone' ? 'tel' : 'text'}
                            name={steps[activeStep].field}
                            value={formData[steps[activeStep].field]}
                            onChange={handleInputChange}
                            className="w-full"
                            required
                          />
                        )}
                        <div className="flex justify-between items-center">
                          {activeStep > 0 && (
                            <Button
                              type="button"
                              variant="ghost"
                              onClick={() => setActiveStep(activeStep - 1)}
                              className="text-purple-600 hover:text-purple-700"
                            >
                              Back
                            </Button>
                          )}
                          <Button
                            type={activeStep === 3 ? 'submit' : 'button'}
                            onClick={() => activeStep < 3 && setActiveStep(activeStep + 1)}
                            className="bg-purple-600 text-white hover:bg-purple-700"
                          >
                            {activeStep === 3 ? 'Send' : 'Next'}
                            <ChevronRight className="ml-2 w-4 h-4" />
                          </Button>
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
                      <h3 className="text-2xl font-semibold text-purple-600 mb-4">Thank you!</h3>
                      <p className="text-zinc-600">We'll get back to you soon.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-purple-700">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="text-purple-600 w-5 h-5" />
                      <p className="text-zinc-600">123 Innovation Street, Tech City, 54321</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="text-purple-600 w-5 h-5" />
                      <p className="text-zinc-600">(123) 456-7890</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="text-purple-600 w-5 h-5" />
                      <p className="text-zinc-600">contact@example.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-purple-700">Our Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="text-purple-600 w-12 h-12" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}