'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Download } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const skills = [
  { name: 'WordPress', progress: 90 },
  { name: 'HTML', progress: 95 },
  { name: 'CSS', progress: 85 },
  { name: 'Angular', progress: 80 },
  { name: 'Photoshop', progress: 75 },
  { name: 'Illustrator', progress: 70 }
]

export default function Skills() {
  const sectionRef = useRef(null)
  const progressBarsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title and label
      gsap.from('#skills-label', {
        scrollTrigger: {
          trigger: '#skills-label',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1
      })

      gsap.from('#skills-title', {
        scrollTrigger: {
          trigger: '#skills-title',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2
      })

      // Animate profile image
      gsap.from('#profile-image', {
        scrollTrigger: {
          trigger: '#profile-image',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        x: 100,
        opacity: 0,
        duration: 1
      })

      // Animate skills progress bars
      progressBarsRef.current.forEach((bar, index) => {
        if (bar) {
          gsap.from(bar, {
            scrollTrigger: {
              trigger: bar,
              start: 'top 80%',
              toggleActions: 'play none none reverse'
            },
            width: 0,
            duration: 1.5,
            delay: 0.2 * index,
            ease: 'power2.out'
          })
        }
      })

      // Animate background text
      gsap.from('#skills-background-text', {
        scrollTrigger: {
          trigger: '#skills-background-text',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        x: -100,
        opacity: 0
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Function to add progress bar elements to ref array
  const addProgressBarRef = (el, index) => {
    progressBarsRef.current[index] = el
  }

  return (
    <section ref={sectionRef} className="relative min-h-screen w-full bg-[#2A2B30] text-white overflow-hidden px-4 py-20 lg:px-20">
      {/* Background Text */}
      <div
        id="skills-background-text"
        className="absolute bottom-0 left-0 right-0 text-[20vw] font-bold text-transparent pointer-events-none select-none"
        style={{
          WebkitTextStroke: '1px rgba(250, 93, 54, 0.1)',
          lineHeight: '0.8'
        }}
      >
        Skills
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Skills */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Profile Card */}
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-[#FA5D36] rounded-lg flex items-center justify-center text-white font-bold text-xl">
                B
              </div>
              <div>
                <h4 className="font-semibold">Brant Connor</h4>
                <a 
                  href="#" 
                  className="text-sm text-gray-400 hover:text-[#FA5D36] transition-colors flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span className="text-[#FA5D36]">{skill.progress}%</span>
                  </div>
                  <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      ref={(el) => addProgressBarRef(el, index)}
                      className="h-full bg-[#FA5D36] rounded-full"
                      style={{ width: `${skill.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="sticky top-20">
              <h3 id="skills-label" className="text-[#FA5D36] text-lg mb-4 tracking-wider">
                # NEED YOU KNOW
              </h3>
              <h2 id="skills-title" className="text-4xl lg:text-5xl font-bold mb-8">
                My Skills.
              </h2>
              <a
                href="/skills"
                className="inline-flex items-center text-[#FA5D36] hover:text-white transition-colors duration-300"
              >
                View More <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <div id="profile-image" className="mt-12">
                <Image
                  src="/me1.png"
                  alt="Professional portrait"
                  width={400}
                  height={500}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

