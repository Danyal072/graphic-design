'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Facebook, Instagram, Twitter, Youtube, Monitor, Palette, Layout, Lightbulb, ArrowRight } from 'lucide-react'
import Header from './component/header'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef(null)
  const sectionRef = useRef(null)
  const servicesRef = useRef(null)
  const aboutRef = useRef(null)
  const portfolioRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Service Section Animations
      gsap.from('#service-label', {
        scrollTrigger: {
          trigger: '#service-label',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1
      })

      gsap.from('#service-title', {
        scrollTrigger: {
          trigger: '#service-title',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2
      })

      // Service Cards Animation
      const cards = document.querySelectorAll('.service-card')
      cards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          },
          y: 100,
          opacity: 0,
          duration: 1,
          delay: 0.2 * index
        })
      })

      // Services Background Text Animation
      gsap.from('#services-background-text', {
        scrollTrigger: {
          trigger: '#services-background-text',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.8,
        duration: 1.5
      })

      // About Section Animations
      gsap.from('#about-label', {
        scrollTrigger: {
          trigger: '#about-label',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1
      })

      gsap.from('#about-heading', {
        scrollTrigger: {
          trigger: '#about-heading',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2
      })

      gsap.from('#about-image', {
        scrollTrigger: {
          trigger: '#about-image',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        x: -100,
        opacity: 0,
        duration: 1
      })

      gsap.from('#about-content', {
        scrollTrigger: {
          trigger: '#about-content',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1
      })

      // Stats Counter Animation
      const stats = document.querySelectorAll('.stat-number')
      stats.forEach((stat) => {
        const target = parseInt(stat.textContent || '0', 10)
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          innerText: 0,
          duration: 2,
          snap: { innerText: 1 },
          modifiers: {
            innerText: (value) => Math.floor(value).toString()
          }
        })
      })

      // About Background Text Parallax
      gsap.to('#about-background-text', {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        y: 100
      })

      // Portfolio Section Animations
      gsap.from('#portfolio-label', {
        scrollTrigger: {
          trigger: '#portfolio-label',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1
      })

      gsap.from('#portfolio-heading', {
        scrollTrigger: {
          trigger: '#portfolio-heading',
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2
      })

      // Project Cards Animation
      const projectCards = document.querySelectorAll('.project-card')
      projectCards.forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          opacity: 0,
          duration: 1,
          delay: 0.2 * index
        })
      })

      // Background Text Animation
      gsap.from('#portfolio-background-text', {
        scrollTrigger: {
          trigger: '#portfolio-background-text',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        },
        x: -100,
        opacity: 0
      })

    }, [mainRef, sectionRef, aboutRef, portfolioRef])

    return () => ctx.revert()
  }, [])

  const services = [
    {
      icon: Monitor,
      title: 'Website Design',
      description: 'Lorem ipsum dolor sit amet adipiscing elit ut elit tellus consectetur'
    },
    {
      icon: Palette,
      title: 'Apps Design',
      description: 'Lorem ipsum dolor sit amet adipiscing elit ut elit tellus consectetur'
    },
    {
      icon: Layout,
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet adipiscing elit ut elit tellus consectetur'
    },
    {
      icon: Lightbulb,
      title: 'Logo Design',
      description: 'Lorem ipsum dolor sit amet adipiscing elit ut elit tellus consectetur'
    }
  ]

  const projects = [
    {
      number: '01',
      title: 'Photographer Branding For Client',
      image: '/web design.avif',
      category: 'Web Design'
    },
    {
      number: '02',
      title: 'Video Editing For Client',
      image: '/video editing.jpg',
      category: 'Video Editing'
    },
    {
      number: '03',
      title: 'Logo Work For Client',
      image: '/logo work.jpg',
      category: 'Logo Design'
    },
    {
      number: '04',
      title: 'Designing For Client',
      image: '/loog.jpg',
      category: 'Logo Design'
    }
  ]

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from('#pic-area img', { opacity: 0, scale: 0.8, duration: 1 }, '-=0.5')
      .from(['#creative-text', '#portfolio-text'], { opacity: 0, scale: 0.8, duration: 1, stagger: 0.3 }, '-=0.5')
      .from('#intro-text', { opacity: 0, y: 50, duration: 1 })
      .from('#name h1', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
      .from('#name p', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
      .from('#button', { opacity: 0, y: 50, duration: 1 }, '-=0.5')
  }, { scope: mainRef })

  return (
    <>
      {/* Hero Section */}
      <div ref={mainRef} id="main" className="w-full min-h-screen bg-[#2A2B30] text-white overflow-hidden">
        <Header className="z-10" />
        <div id="main-area" className="min-h-[90vh] w-full flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0">
          {/* Text Content */}
          <div id="text-content" className="w-full lg:w-[35%] flex flex-col justify-center items-center lg:items-start relative mb-8 lg:mb-0">
            <h1
              id="creative-text"
              className="lg:block relative md:text-[10rem] md:translate-x-[12rem] lg:absolute bottom-0 top-[0] left-0 z-0 text-[7rem] lg:text-[8rem] xl:text-[12rem] text-transparent font-bold tracking-wider transform -translate-x-[0rem]"
              style={{
                WebkitTextStroke: "1px #fa5d363d",
                fontFamily: "sans-serif",
              }}
            >
              Creative
            </h1>
            <div id="intro-text" className="w-full flex justify-center lg:justify-start items-center relative text-xl lg:text-2xl font-light font-sans uppercase gap-4 lg:gap-6 mb-4 lg:mb-0">
              <div id="line" className="w-16 lg:w-36 h-[2px] bg-[#FA5D36]"></div>
              <p className="tracking-[.25rem] lg:tracking-[.5rem] text-[#FA5D36]">Introducing</p>
            </div>

            <div id="name" className="w-full text-center lg:text-left">
              <h1 className="text-3xl lg:text-[3.1rem] font-sans font-bold py-3 lg:py-6">I'M MUHAMMAD ABDULLAH</h1>
              <p className="font-sans text-lg lg:text-xl font-light py-3 lg:py-6">Better Design for your Digital Product.</p>
            </div>
            <div id="button" className="flex justify-center lg:justify-start items-center w-full">
              <button className="w-48 lg:w-[12rem] h-12 lg:h-[3rem] border border-[#FA5D36] text-white bg-transparent transition-all duration-500 hover:border-white hover:bg-[#FA5D36] text-lg lg:text-xl font-sans font-light uppercase">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Image Area */}
          <div id="pic-area" className="w-full lg:w-[50%] flex justify-center items-center relative h-[50vh] lg:h-[90vh] mb-8 lg:mb-0">
            <div id="glow" className="absolute bg-white w-[45%] bg-opacity-20 -translate-y-[2rem] lg:-translate-y-[5rem] blur-2xl rounded-full h-[150px] lg:h-[250px]"></div>
            <Image
              src="/me1.png"
              alt="Muhammad Abdullah"
              width={500}
              height={800}
              className="w-auto h-full object-contain relative z-20"
              style={{ 
                transform: "scale(0.98)",
              }}
            />
            <h1
              id="portfolio-text"
              className="absolute text-[5.5rem] lg:text-[12rem] overflow-y-hidden text-transparent font-bold tracking-wider transform translate-x-[0rem] lg:translate-x-[5rem] z-0 font-sans bottom-0"
              style={{
                WebkitTextStroke: "1.5px #575760",
              }}
            >
              Portfolio
            </h1>
          </div>

          {/* Social Icons */}
          <div id="social-icon" className="hidden w-full lg:w-[5%] lg:flex md:flex justify-center items-center mt-8 lg:mt-0">
            <div className="flex lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-6">
              <div className="hidden lg:block h-36 w-[0.5px] bg-[#FA5D36]"></div>
              <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
                {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                  <a key={index} href="#" className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 border border-gray-600 rounded-full hover:border-[#FA5D36] hover:bg-[#F4F4F4] hover:text-[#FA5D36] transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <div className="hidden lg:block h-36 w-[1px] bg-[#FA5D36]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section ref={sectionRef} className="relative min-h-screen w-full bg-[#2A2B30] text-white overflow-hidden px-4 py-20 lg:px-20">
        <div
          id="services-background-text"
          className="absolute bottom-0 left-0 right-0 text-[20vw] font-bold text-transparent pointer-events-none select-none"
          style={{
            WebkitTextStroke: '1px rgba(250, 93, 54, 0.1)',
            lineHeight: '0.8'
          }}
        >
          Services
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-20">
            <h3 id="service-label" className="text-[#FA5D36] text-lg md:text-xl mb-4 font-light tracking-wider">
              # SERVICE
            </h3>
            <h2 id="service-title" className="text-4xl md:text-6xl font-bold">
              Best Services.
            </h2>
          </div>

          <div ref={servicesRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group p-6 rounded-lg border border-gray-800 hover:border-[#FA5D36] transition-all duration-300"
              >
                <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-lg bg-[#FA5D36] bg-opacity-10 text-[#FA5D36] group-hover:bg-[#FA5D36] group-hover:text-white transition-all duration-300">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#FA5D36] transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="relative min-h-screen w-full bg-[#2A2B30] text-white overflow-hidden px-4 py-20 lg:px-20">
        <div
          id="about-background-text"
          className="absolute right-0 top-1/2 text-[20vw] font-bold text-transparent pointer-events-none select-none"
          style={{
            WebkitTextStroke: '1px rgba(250, 93, 54, 0.1)',
            lineHeight: '0.8',
          }}
        >
          About
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div id="about-image" className="relative">
              <Image
                src="/me2.png"
                alt="Professional in orange t-shirt"
                width={600}
                height={800}
                className="w-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div id="about-content" className="flex flex-col justify-center">
              <h3 id="about-label" className="text-[#FA5D36] text-lg mb-4 tracking-wider">
                # ABOUT
              </h3>
              <h2 id="about-heading" className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Let Guide you<br />to Living in the<br />Digital World
              </h2>
              <p className="text-gray-400 mb-8">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent efficitur semper
                laoreet. Etiam laoreet scelerisque mauris ut lobortis. Ut dignissim ante met, semip eu pretium massa porttitor
                vitae.
              </p>
              <blockquote className="mb-8 border-l-2 border-[#FA5D36] pl-6">
                <p className="text-lg italic text-gray-300 mb-4">
                  "Lift your business to new heights with our digital marketing services"
                </p>
                <cite className="text-[#FA5D36] not-italic">Word by Muhammad Abdullah</cite>
              </blockquote>
              <a
                href="/about"
                className="inline-flex items-center text-[#FA5D36] hover:text-white transition-colors duration-300"
              >
                About Me <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-20 border-t border-gray-800">
            {[
              { number: 89, label: 'Project Done' },
              { number: 59, label: 'Award Won' },
              { number: 19, label: 'Years Experience' },
              { number: 12, label: 'Project Done' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <span className="stat-number text-[#FA5D36] text-5xl lg:text-6xl font-bold block mb-2">
                  {stat.number}
                </span>
                <span className="text-gray-400">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="relative min-h-screen w-full bg-[#2A2B30] text-white overflow-hidden px-4 py-20 lg:px-20">
        {/* Background Text */}
        <div
          id="portfolio-background-text"
          className="absolute bottom-0 left-0 right-0 text-[20vw] font-bold text-transparent pointer-events-none select-none"
          style={{
            WebkitTextStroke: '2px rgba(250, 93, 54, 0.7)',
            lineHeight: '0.5',
          }}
        >
          Project
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
            {/* Left Column */}
            <div className="lg:col-span-4 z-50">
              <div className="sticky top-20">
                <h3 id="portfolio-label" className="text-[#FA5D36] text-lg mb-4 tracking-wider">
                  # WORK & PORTFOLIO
                </h3>
                <h2 id="portfolio-heading" className=" z-50 text-4xl lg:text-5xl font-bold mb-8">
                  My Project.
                </h2>
                <a
                  href="/projects"
                  className="inline-flex items-center text-[#FA5D36] hover:text-white transition-colors duration-300"
                >
                  See all Project <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
              <div id="about-image" className="lg:block w-[500px] hidden relative left-0 lg:left-[-16rem] h-full  lg:-z-10 bottom-0 lg:bottom-[-10rem] opacity-55">
              <Image
                src="/me1.png"
                alt="Professional in orange t-shirt"
                width={800}
                height={800}
                className="w-full lg:h-[60rem] object-cover object-right rounded-lg grayscale transition-all duration-500 absolute bottom-0"
              />
            </div>
            </div>

            {/* Right Column - Projects Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="project-card group relative overflow-hidden rounded-lg"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 p-6">
                        <span className="text-[#FA5D36] text-sm mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-semibold">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

