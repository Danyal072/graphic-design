'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.5,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  }

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <header className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <Link href="/" className="w-24 sm:w-32 md:w-40">
              <Image src="/Logos.png" alt="Logo" width={160} height={40} className="w-full h-auto" />
            </Link>
          </div>

          {/* Hamburger menu for mobile */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-[#F4F4F4] focus:outline-none scale-110 z-50 relative"
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  variants={{
                    open: { d: "M6 20L20 6M6 6l12 12" },
                    closed: { d: "M4 6h16M4 12h16M4 18h16" }
                  }}
                />
              </motion.svg>
            </motion.button>
          </div>

          {/* Navigation for larger screens */}
          <nav className="hidden lg:flex items-center space-x-1 lg:-space-x-0">
            {['Home', 'About', 'Services', 'Project', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="px-6 py-4 text-sm lg:text-base font-light bg-[#F4F4F4] text-[#FA5D36] hover:bg-[#808080] hover:text-[#F4F4F4] transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Contact Now button for larger screens */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="border border-[#FA5D36] text-[#FA5D36] px-4 py-2 text-sm lg:text-base font-light hover:bg-[#FA5D36] hover:text-white transition-all duration-300"
            >
              Contact Now
            </Link>
          </div>
        </div>
      </div>

      {/* Full-screen Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-[#FA5D36] z-40 flex items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.div className="text-center">
              {['Home', 'About', 'Services', 'Project', 'Contact'].map((item) => (
                <motion.div key={item} variants={menuItemVariants}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="block px-3 py-4 text-2xl font-light text-[#F4F4F4] hover:bg-[#808080] hover:text-[#F4F4F4] transition-all duration-300"
                    onClick={toggleMenu}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/contact"
                  className="inline-block mt-4 px-6 py-3 text-xl font-light border border-[#FA5D36] text-[#FA5D36] hover:bg-[#FA5D36] hover:text-white transition-all duration-300"
                  onClick={toggleMenu}
                >
                  Contact Now
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header

