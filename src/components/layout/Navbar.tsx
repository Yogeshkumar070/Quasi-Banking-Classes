'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AuthModal from '../auth/AuthModal'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Track scroll position for the progress beam.
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (windowHeight <= 0) {
        setScrollProgress(0)
        return
      }
      const scroll = (totalScroll / windowHeight) * 100
      setScrollProgress(Math.min(100, Math.max(0, scroll)))
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    window.addEventListener('load', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
      window.removeEventListener('load', handleScroll)
    }
  }, [])

  const openAuthModal = () => {
    setIsAuthModalOpen(true)
  }

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)
   
    if (sectionId === 'explore') {
      let element = document.getElementById('choose-exam')
      if (!element) {
        const headings = Array.from(document.querySelectorAll('h2'))
        element = headings.find(h => h.textContent?.includes('Choose Your Exam')) || null
      }
      if (element) {
        const yOffset = -120
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      const yOffset = -76
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className="w-full sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_14px_rgba(15,23,42,0.03)] font-sans select-none relative">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-[76px]">
           
            {/* Left Side: Brand Identity */}
            <div className="flex items-center flex-shrink-0">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                className="flex items-center group transition-transform duration-150 active:scale-95 cursor-pointer bg-transparent border-none p-0"
              >
                <div className="relative w-[44px] h-[44px] rounded-[12px] bg-gradient-to-br from-[#30ACE2]/10 to-[#4a80ed]/10 p-[3px] transition-transform duration-300 group-hover:-rotate-3">
                  <div className="relative w-full h-full rounded-[9px] overflow-hidden ring-1 ring-black/[0.04]">
                    <Image
                      src="/images/logo.jpeg"
                      alt="QBC Logo"
                      fill
                      className="object-contain"
                      priority
                      sizes="44px"
                    />
                  </div>
                </div>
                <div className="ml-3 hidden sm:block text-left">
                  <span className="block text-[19px] font-extrabold text-[#14224A] tracking-[-0.01em] leading-none group-hover:text-[#2a72c9] transition-colors">
                    QUASI
                  </span>
                  <span className="text-[12px] font-bold text-[#4a80ed] tracking-[0.16em] uppercase mt-[3px] block">
                    Banking Classes
                  </span>
                </div>
              </button>
            </div>

            {/* Middle Side: Menu Links */}
            <div className="hidden md:flex items-center gap-2 lg:gap-3 mx-auto justify-center">
              {/* Explore Courses */}
              <button
                onClick={() => scrollToSection('explore')}
                className="flex items-center gap-2 bg-slate-50 hover:bg-[#eaf4fc] border border-slate-200/70 hover:border-[#30ACE2]/40 text-[#14224A] px-4 py-2.5 rounded-xl font-bold text-[16px] transition-all duration-200 cursor-pointer group whitespace-nowrap active:scale-95"
              >
                <svg className="w-[15px] h-[15px] text-[#30ACE2]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
                Explore Courses
              </button>

              <div className="w-px h-5 bg-slate-200 mx-1" />

              {/* Mock Tests */}
              <button 
                onClick={() => scrollToSection('mock-tests')} 
                className="flex items-center gap-1.5 text-[#14224A] hover:text-[#30ACE2] font-bold text-[16.5px] transition-all duration-200 py-2 px-3 relative group whitespace-nowrap bg-transparent border-none cursor-pointer"
              >
                <svg className="w-[16px] h-[16px] text-amber-500" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Mock Tests
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#30ACE2] group-hover:w-[calc(100%-24px)] transition-all duration-300 rounded-full" />
              </button>

              {/* Interview & GD */}
              <button 
                onClick={() => scrollToSection('interview-gd')} 
                className="flex items-center gap-1.5 text-[#14224A] hover:text-[#30ACE2] font-bold text-[16.5px] transition-all duration-200 py-2 px-3 relative group whitespace-nowrap bg-transparent border-none cursor-pointer"
              >
                <svg className="w-[16px] h-[16px] text-purple-500" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                Interview &amp; GD
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#30ACE2] group-hover:w-[calc(100%-24px)] transition-all duration-300 rounded-full" />
              </button>

              {/* Notifications */}
              <button 
                onClick={() => scrollToSection('notifications')} 
                className="flex items-center gap-1.5 text-[#14224A] hover:text-[#30ACE2] font-bold text-[16.5px] transition-all duration-200 py-2 px-3 relative group whitespace-nowrap bg-transparent border-none cursor-pointer"
              >
                <svg className="w-[16px] h-[16px] text-emerald-500" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.07 6.07 0 00-1-3.5M9 17v1a3 3 0 006 0v-1m-6 0H4s.995-.096 1.405-1.405A2.035 2.035 0 015.5 14.158V11a6.07 6.07 0 011-3.5m0 0a5.003 5.003 0 016 0M9 7V5a3 3 0 116 0v2" />
                </svg>
                Notifications
                <span className="flex h-1.5 w-1.5 relative -top-1.5 -ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500"></span>
                </span>
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#30ACE2] group-hover:w-[calc(100%-24px)] transition-all duration-300 rounded-full" />
              </button>
            </div>

            {/* Right Side */}
            <div className="flex items-center flex-shrink-0">
              <div className="hidden md:block">
                <button
                  type="button"
                  onClick={openAuthModal}
                  className="bg-gradient-to-r from-[#30ACE2] to-[#2563eb] hover:from-[#2597c9] hover:to-[#1d4fd1] text-white px-6 py-2.5 rounded-xl font-bold text-[15.5px] tracking-wide transition-all duration-300 shadow-[0_6px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_22px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  Login / Register
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex md:hidden text-slate-700 hover:bg-slate-50 p-2 rounded-xl transition-colors cursor-pointer"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bright Yellow Progress Beam */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-[#FFEA00] transition-[width] duration-150 ease-out z-50 rounded-r-full shadow-[0_0_8px_rgba(255,234,0,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Mobile Drawer Menu */}
        <div className={`md:hidden fixed inset-x-0 top-[77px] bottom-0 bg-slate-950/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 flex' : 'opacity-0 pointer-events-none hidden'}`}>
          <div className={`bg-white w-full max-h-[calc(100vh-77px)] border-b border-slate-100 shadow-xl px-5 py-6 flex flex-col gap-4 overflow-y-auto transition-transform duration-300 ease-out origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-90 opacity-0 pointer-events-none'}`}>
            
            <button
              onClick={() => scrollToSection('explore')}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#30ACE2]/10 to-[#4a80ed]/10 text-[#2563eb] font-bold py-3 px-4 rounded-xl border border-blue-100 text-[17px]"
            >
              Explore All Courses
            </button>
           
            <hr className="border-slate-100 my-1" />
            
            <button 
              onClick={() => scrollToSection('mock-tests')} 
              className="text-left text-[#14224A] font-bold py-3 text-[17px] border-b border-slate-50 bg-transparent border-none"
            >
              Mock Tests
            </button>
            
            <button 
              onClick={() => scrollToSection('interview-gd')} 
              className="text-left text-[#14224A] font-bold py-3 text-[17px] border-b border-slate-50 bg-transparent border-none"
            >
              Interview &amp; GD Prep
            </button>
            
            <button 
              onClick={() => scrollToSection('notifications')} 
              className="flex items-center justify-between text-[#14224A] font-bold py-3 text-[17px] border-b border-slate-50 bg-transparent border-none w-full"
            >
              <span>Notifications</span>
              <span className="bg-amber-500 text-white text-[11px] px-2 py-0.5 rounded-full font-black">LIVE</span>
            </button>

            {/* Mobile Auth */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  openAuthModal()
                  setIsMobileMenuOpen(false)
                }}
                className="w-full bg-gradient-to-r from-[#30ACE2] to-[#2563eb] text-white py-3.5 rounded-xl font-bold text-[16px] transition-colors cursor-pointer text-center shadow-[0_6px_16px_rgba(37,99,235,0.25)]"
              >
                Login / Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isAuthModalOpen && (
        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      )}
    </>
  )
}