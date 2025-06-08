"use client"

import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import Image from "next/image"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const downloadCV = () => {
    // Option 1: Direct download of a file from public folder
    //const link = document.createElement('a')
    //link.href = '/cv.pdf' // Put your CV file in the public folder
    //link.download = 'Yogesh_CV.pdf' // Name for the downloaded file
    //document.body.appendChild(link)
    //link.click()
    //document.body.removeChild(link)

    // Option 2: Open CV in new tab 
    window.open('/cv_new.pdf', '_blank')
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Yogesh</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 font-light">
                Full Stack Developer
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                I create beautiful, responsive web applications with modern technologies. Passionate about clean code,
                user experience, and bringing ideas to life.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 w-full sm:w-auto sm:flex-1 lg:flex-none lg:px-8"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={downloadCV}
                className="w-full sm:w-auto sm:flex-1 lg:flex-none lg:px-8"
              >
                <Download className="h-4 w-4 mr-2" />
                Download CV
              </Button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/YogeshTyagi00"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/yogesh-tyagi-25277731b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:tyagiyogesh848@gmail.com"
                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
              <div className="relative z-10 w-72 h-72 mx-auto mt-4 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                <Image
                  src="/placeholder.jpg?height=300&width=300"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
                </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-slate-400" />
        </div>
      </div>
    </section>
  )
}