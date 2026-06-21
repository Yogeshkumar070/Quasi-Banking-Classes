'use client'

import React, { useState } from 'react'
import Image from 'next/image' 
import Link from 'next/link' 

export default function Hero() {
  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0)
  const banners = [
  "/images/SBIPOBANNER.png",
  "/images/2.1QBC-banner.png",
  "/images/2.2canva.png"
]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)

  return (
    <section className="w-full bg-[#f8fafc] pb-12 relative font-sans"> 
      
      {/* 1. SMOOTHED CAROUSEL BANNER — Height increased by an additional 5% */}
      <div className="max-w-[1400px] mx-auto px-4 pt-4">
        <div className="relative w-full group overflow-hidden bg-blue-50 rounded-2xl shadow-sm">
          <Link href="/target-sbi-po-batch" className="block w-full cursor-pointer relative">
            {/* Height specs increased by 5% to consume empty space dynamically */}
            <div className="relative w-full h-[148px] sm:h-[196px] md:h-[276px] lg:h-[386px]">
              <Image 
                src={banners[currentSlide]} 
                alt="QBC Target Batch Banner"
                fill
                className="object-cover object-center transition-all duration-500 rounded-2xl" 
                priority
              />
            </div>
          </Link>

          {/* Carousel Arrows */}
          <button 
            onClick={prevSlide} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button 
            onClick={nextSlide} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-slate-800 p-2.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dashes */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, idx) => (
              <button 
                key={idx} 
                onClick={() => setCurrentSlide(idx)} 
                className={`h-1 transition-all duration-300 ${currentSlide === idx ? 'w-8 bg-white' : 'w-6 bg-white/60 hover:bg-white/90'}`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* 2. THE TRUST SECTION — Spacing optimized (mt-7) to balance the taller banner */}
      <div className="max-w-[1400px] mx-auto px-4 mt-5 text-center">
        <h2 className="text-[34px] md:text-[44px] font-black text-[#14224A] tracking-[-0.02em] leading-[1.1]">
          Bharat&apos;s{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#30ACE2] to-[#4a80ed]">
            Trusted &amp; Affordable
          </span>{' '}
          Educational Platform
        </h2>
        
        <p className="mt-3 text-[17px] text-slate-500 font-medium max-w-[560px] mx-auto leading-relaxed">
          Unlock your potential by signing up with Quasi Banking Classes — the most affordable learning solution.
        </p>
        
        <div className="mt-4 mb-12">
          <button className="bg-gradient-to-r from-[#1f9fd8] to-[#2563eb] hover:from-[#1c8fc2] hover:to-[#1d4fd1] text-white px-11 py-4 rounded-xl font-bold text-[18px] transition-all duration-300 shadow-[0_8px_22px_rgba(37,99,235,0.32)] hover:shadow-[0_10px_30px_rgba(37,99,235,0.42)] hover:-translate-y-0.5 active:scale-95 tracking-wide">
            Get Started
          </button>
        </div>
      </div>

      {/* 3. PREMIUM FLOATING FEATURES BANNER */}
      <div className="max-w-[1120px] mx-auto px-4 relative z-10 -mb-20">
        <div className="bg-white rounded-[24px] shadow-[0_24px_60px_-12px_rgba(20,34,74,0.14)] py-9 px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 divide-y md:divide-y-0 lg:divide-x divide-slate-100 border border-slate-100/80">

          {/* Feature 1: Lectures */}
          <div className="flex flex-col items-center text-center px-3 pt-8 md:pt-0 group">
            <div className="w-[68px] h-[68px] mb-4 transition-transform duration-300 group-hover:-translate-y-1.5">
              <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="lecGrad" x1="8" y1="14" x2="56" y2="50" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#42B7F0"/>
                    <stop offset="1" stopColor="#1D7FC2"/>
                  </linearGradient>
                </defs>
                <rect x="8" y="14" width="48" height="36" rx="9" fill="url(#lecGrad)"/>
                <rect x="8" y="14" width="48" height="36" rx="9" fill="white" fillOpacity="0.04"/>
                <path d="M26 24L40 32L26 40V24Z" fill="white"/>
                <rect x="24" y="53" width="16" height="4" rx="2" fill="#CBE9FA"/>
              </svg>
            </div>
            <h3 className="text-[19px] font-extrabold text-[#14224A] leading-tight tracking-tight">Lectures by</h3>
            <p className="text-[14.5px] text-slate-500 font-semibold mt-1">Top Faculty</p>
          </div>

          {/* Feature 2: Mock Tests */}
          <div className="flex flex-col items-center text-center px-3 pt-8 md:pt-0 group">
            <div className="w-[68px] h-[68px] mb-4 transition-transform duration-300 group-hover:-translate-y-1.5">
              <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="paperGrad" x1="14" y1="8" x2="50" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EEF2FF"/>
                    <stop offset="1" stopColor="#DCE3FB"/>
                  </linearGradient>
                </defs>
                <rect x="18" y="12" width="30" height="40" rx="4" fill="#C7D2FE" transform="rotate(5 18 12)"/>
                <rect x="14" y="8" width="30" height="40" rx="4" fill="url(#paperGrad)" stroke="#A5B4FC" strokeWidth="1.5"/>
                <rect x="19" y="16" width="14" height="2.4" rx="1.2" fill="#818CF8"/>
                <path d="M20 25.5L23 28.5L29 21.5" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 34.5L23 37.5L29 30.5" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="19" y="42" width="10" height="2.4" rx="1.2" fill="#C7D2FE"/>
                <path d="M33 47L48 32L54 38L39 53L32 55L33 47Z" fill="#FCD34D" stroke="#F59E0B" strokeWidth="1.2" strokeLinejoin="round"/>
                <path d="M48 32L54 38" stroke="#F472B6" strokeWidth="3"/>
              </svg>
            </div>
            <h3 className="text-[19px] font-extrabold text-[#14224A] leading-tight tracking-tight">50+ Mock Tests</h3>
            <p className="text-[14.5px] text-slate-500 font-semibold mt-1">&amp; Sample Papers</p>
          </div>

          {/* Feature 3: Doubt Resolution */}
          <div className="flex flex-col items-center text-center px-3 pt-8 md:pt-0 group">
            <div className="w-[68px] h-[68px] mb-4 transition-transform duration-300 group-hover:-translate-y-1.5">
              <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="headGrad" x1="14" y1="14" x2="40" y2="56" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A78BFA"/>
                    <stop offset="1" stopColor="#7C3AED"/>
                  </linearGradient>
                </defs>
                <path d="M32 12C22 12 15 19.5 15 29C15 35.5 18 39.5 21.5 42.5L20 54L29 48.5C30 48.7 31 48.8 32 48.8C42 48.8 49 41.3 49 29C49 19.5 42 12 32 12Z" fill="url(#headGrad)"/>
                <circle cx="40" cy="20" r="11" fill="#FBCFE8"/>
                <path d="M36.5 17.2C37.2 15.7 38.9 14.8 40.6 15.3C42.3 15.8 43.3 17.5 42.7 19.2C42.2 20.6 40.8 21 40 21.8C39.6 22.2 39.4 22.6 39.4 23.2" stroke="#DB2777" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="39.4" cy="26.2" r="1.3" fill="#DB2777"/>
              </svg>
            </div>
            <h3 className="text-[19px] font-extrabold text-[#14224A] leading-tight tracking-tight">24 x 7</h3>
            <p className="text-[14.5px] text-slate-500 font-semibold mt-1">Doubt Resolution</p>
          </div>

          {/* Feature 4: Interview Preparation */}
          <div className="flex flex-col items-center text-center px-3 pt-8 md:pt-0 group">
            <div className="w-[68px] h-[68px] mb-4 transition-transform duration-300 group-hover:-translate-y-1.5">
              <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="medalGrad" x1="16" y1="6" x2="48" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FCD34D"/>
                    <stop offset="1" stopColor="#F59E0B"/>
                  </linearGradient>
                </defs>
                <path d="M21 34L13 50L23 48L27 57L34 41Z" fill="#3B82F6"/>
                <path d="M43 34L51 50L41 48L37 57L30 41Z" fill="#2563EB"/>
                <circle cx="32" cy="28" r="20" fill="url(#medalGrad)"/>
                <circle cx="32" cy="28" r="14.5" fill="white" fillOpacity="0.18"/>
                <path d="M24 28L29.5 33.5L41 21" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-[19px] font-extrabold text-[#14224A] leading-tight tracking-tight">Interview</h3>
            <p className="text-[14.5px] text-slate-500 font-semibold mt-1">Preparation</p>
          </div>

        </div>
      </div>

    </section>
  )
}
