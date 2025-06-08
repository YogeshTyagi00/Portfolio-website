"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Mail, MapPin, Send,CheckCircle, AlertCircle } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch('https://formspree.io/f/xdkzenav', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
        
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setError('Failed to send message. Please try again or contact me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            I&apos;m always open to discussing new opportunities and interesting projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">Let&apos;s work together</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Whether you have a project in mind or just want to chat about technology, I&apos;d love to hear from you.
                Drop me a message and I&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Email</p>
                  <p className="text-slate-600 dark:text-slate-400">tyagiyogesh848@gmail.com</p>
                </div>
              </div>

              {/* <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Whatsapp</p>
                  <p className="text-slate-600 dark:text-slate-400">+91 9079933627</p>
                </div>
              </div> */}

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">Location</p>
                  <p className="text-slate-600 dark:text-slate-400">Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    Message sent successfully!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Thank you for reaching out. I&apos;ll get back to you soon!
                  </p>
                </div>
              ) : (
                <>
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                      <div className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                        <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
                      </div>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}