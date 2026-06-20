'use client'

import React, { useRef } from 'react'
import Image from 'next/image'

// 1. Faculty Data
const facultyData = [
  {
    name: "B Jagan",
    subject: "Quantitative Aptitude",
    experience: "5+ Years Exp",
    image: "/images/faculty_Jagan.jpeg",
    specialTag: "IIT KHARAGPUR" 
  },
  {
    name: "B G. Hari Krishna",
    subject: "Banking Awareness",
    experience: "5+ Years Exp",
    image: "/images/faculty_Hari_Krishna.jpeg", 
    specialTag: null
  },
  {
    name: "G. Pratyusha Rao",
    subject: "English Language",
    experience: "4+ Years Exp",
    image: "/images/faculty_Pratyusha.jpeg", 
    specialTag: null
  },
  {
    name: "B. Sudha Rani",
    subject: "Coordinator",
    experience: "5+ Years Exp",
    image: "/images/faculty_Sudha_Rani.jpeg", 
    specialTag: null
  },
  {
    name: "Munilal Nayak",
    subject: "Reasoning",
    experience: "4+ Years Exp",
    image: "/images/faculty_Munilal.jpeg", 
    specialTag: null
  }
];

export default function Faculty() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      // 10% Scaled down calculation: 216px width + 20px gap = 236px jump
      const scrollAmount = direction === 'right' ? 236 : -236;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-12 bg-gradient-to-b from-[#f8fafc] via-[#f0f5ff] to-white font-sans overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative">

        {/* ========================================= */}
        {/* FACULTY SECTION: Heading & Controls       */}
        {/* ========================================= */}
        <div className="relative flex items-center justify-center mb-4 h-12 pt-8">
          {/* Perfectly Centered Main Title */}
          <h2 className="text-[28px] md:text-[34px] font-black text-[#14224A] text-center tracking-tight absolute left-1/2 -translate-x-1/2">
            Know your Teacher
          </h2>
          
          {/* Navigation Controls Pinned to Right */}
          <div className="hidden md:flex gap-3 absolute right-0">
            <button 
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 hover:border-[#30ACE2] hover:text-[#30ACE2] text-slate-400 transition-all z-20 cursor-pointer shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center bg-white hover:bg-slate-50 hover:border-[#30ACE2] hover:text-[#30ACE2] text-slate-400 transition-all z-20 cursor-pointer shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        {/* ========================================= */}
        {/* CAROUSEL: 10% Scaled Down                 */}
        {/* ========================================= */}
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 pt-12 px-2 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {facultyData.map((teacher, index) => (
              // Card Width scaled down from 243px to 216px
              <div key={index} className="relative flex-none w-[216px] flex flex-col snap-start mt-[36px] group">
                
                {/* 1. Premium Gold Gradient Circle (Scaled down from 117px to 100px) */}
                <div className="absolute -top-[50px] left-1/2 -translate-x-1/2 w-[100px] h-[100px] rounded-full p-[2.5px] bg-gradient-to-b from-[#facc15] to-[#f59e0b] shadow-[0_6px_16px_rgba(245,158,11,0.2)] z-20 group-hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-white border-2 border-white overflow-hidden relative">
                    <Image 
                      src={teacher.image} 
                      alt={teacher.name} 
                      fill 
                      className="object-cover object-top" 
                      sizes="100px"
                    />
                  </div>

                  {/* Overlapping Badge Pill Tag */}
                  {teacher.specialTag && (
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-max bg-[#14224A] text-[#facc15] text-[8.5px] font-bold px-2.5 py-0.5 rounded-full shadow-md uppercase tracking-widest border border-slate-800">
                      {teacher.specialTag}
                    </div>
                  )}
                </div>

                {/* 2. Elevated White Card Base (Height & Padding scaled down) */}
                <div className="bg-white w-full h-[180px] pt-[60px] pb-4 px-3.5 rounded-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center group-hover:shadow-[0_8px_24px_rgba(48,172,226,0.1)] hover:border-[#30ACE2]/30 transition-all duration-300">
                  
                  {/* Name typography */}
                  <h3 className="text-[17px] font-black text-[#14224A] leading-tight">
                    {teacher.name}
                  </h3>
                  
                  {/* Styled Subject Tag */}
                  <div className="mt-2 w-full flex justify-center">
                    <span className="inline-block bg-blue-50/80 border border-blue-100 text-[#30ACE2] text-[9.5px] font-extrabold px-2.5 py-1 rounded-lg uppercase tracking-wider w-full truncate">
                      {teacher.subject}
                    </span>
                  </div>

                  <div className="flex-grow"></div>

                  {/* Experience Badge with Star Icon */}
                  <div className="bg-slate-50 text-slate-600 border border-slate-100 text-[11.5px] font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    {teacher.experience}
                  </div>
                  
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}