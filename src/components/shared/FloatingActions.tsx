'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function FloatingActions() {
  const [isQrOpen, setIsQrOpen] = useState(false)

  // Smooth scroll to Support Banner
  const scrollToSupport = () => {
    const element = document.getElementById('support-banner')
    if (element) {
      const yOffset = -100 // Adjust to not hide behind navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  // Premium Indigo color
  const brandColor = "bg-[#5A4FCF]"
  const brandHover = "hover:bg-[#4b41b5]"

  return (
    <>
      {/* 1. SLIDING QR CODE DRAWER (Middle Right) */}
      <div 
        className={`fixed top-2/3 -translate-y-1/2 right-0 z-[100] flex items-start transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isQrOpen ? 'translate-x-0' : 'translate-x-[calc(100%-42px)]' // Adjusted for smaller 42px tab width
        }`}
      >
        {/* The peek-out Tab (Smaller, NO arrows to confuse with carousel) */}
        <button 
          onClick={() => setIsQrOpen(!isQrOpen)}
          className={`${brandColor} text-white w-[42px] h-[54px] flex items-center justify-center rounded-l-lg shadow-[-4px_0_12px_rgba(0,0,0,0.15)] cursor-pointer ${brandHover} transition-colors`}
        >
          {isQrOpen ? (
            // Close icon (X)
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Open icon (Just the Smartphone)
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          )}
        </button>

        {/* The actual QR Container (Scaled down slightly) */}
        <div className={`${brandColor} p-3 rounded-bl-lg shadow-2xl border-l border-b border-white/10`}>
          <div className="bg-white p-2 rounded-md">
            <div className="relative w-[110px] h-[110px]">
              {/* Replace with your actual QR code image path */}
              <Image 
                src="/images/qr-code.png" 
                alt="Download App QR" 
                fill 
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-white font-semibold text-center mt-2 tracking-wide text-[14px]">
            Scan Me
          </p>
        </div>
      </div>

      {/* 2. FLOATING PHONE BUTTON (Bottom Right - Smaller 50px size) */}
      <button 
        onClick={scrollToSupport}
        className={`fixed bottom-8 right-6 z-[100] w-[50px] h-[50px] ${brandColor} ${brandHover} text-white rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(90,79,207,0.4)] transition-all hover:scale-110 active:scale-95 cursor-pointer`}
        aria-label="Contact Support"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.012 16.518c-1.396-.062-2.776-.324-4.088-.775a1.498 1.498 0 00-1.638.38l-2.091 2.09c-2.883-1.464-5.263-3.844-6.727-6.726l2.09-2.091a1.5 1.5 0 00.38-1.638 12.03 12.03 0 01-.774-4.088 1.5 1.5 0 00-1.5-1.494H2.499A1.5 1.5 0 001 3.676C1.306 13.916 9.584 22.194 19.824 22.5a1.5 1.5 0 001.5-1.499v-2.983a1.5 1.5 0 00-1.312-1.5z" />
        </svg>
      </button>
    </>
  )
}