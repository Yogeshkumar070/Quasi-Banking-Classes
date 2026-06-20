import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const introductionPoints = [
  "If you are looking to prepare for Group Discussion (GD) and Personal Interview (PI) for competitive exams, job interviews, or admissions, we provide GDPI courses both online that can help you enhance your skills and boost your confidence.",
  "These courses typically focus on improving your communication, critical thinking, and presentation skills while also preparing you for potential interview questions."
];

export default function InterviewGDPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#30ACE2]/20 selection:text-[#14224A]">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f5f7fb] to-[#eef5ff] border-b border-slate-200/60 pt-12 pb-12 lg:pt-16 lg:pb-16">
        
        {/* Decorative background accents */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#30ACE2]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-[#14224A]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
            
            {/* Left Column: Content & Blue CTA */}
            <div className="w-full lg:w-[52%] text-left space-y-6">

              {/* Eyebrow tag */}
              

              <h1 className="text-3xl md:text-4xl font-extrabold text-[#14224A] tracking-tight leading-[1.15]">
                Group Discussion &amp; Personal Interview{' '}
                <span className="bg-gradient-to-r from-[#30ACE2] to-[#1d7fae] bg-clip-text text-transparent">
                  Introduction
                </span>
              </h1>
              
              {/* Content Points with Icons */}
              <div className="space-y-4">
                {introductionPoints.map((text, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 bg-white/60 backdrop-blur-sm border border-slate-200/70 rounded-xl p-3.5 transition-all duration-300 hover:border-[#30ACE2]/40 hover:bg-white hover:shadow-[0_4px_16px_rgba(48,172,226,0.12)]"
                  >
                    <div className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-[#30ACE2] to-[#1d7fae] flex items-center justify-center shadow-[0_3px_8px_rgba(48,172,226,0.35)]">
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Blue Enroll Now Button */}
              <div className="pt-2 flex items-center gap-4">
                <Link 
                  href="/dashboard"
                  className="group inline-flex justify-center items-center gap-2 bg-gradient-to-r from-[#30ACE2] to-[#1d8fc7] hover:from-[#2597c9] hover:to-[#1a7eb3] text-white px-8 py-3.5 rounded-full font-bold text-[15px] tracking-wide transition-all duration-300 shadow-[0_4px_14px_rgba(48,172,226,0.35)] hover:shadow-[0_8px_24px_rgba(48,172,226,0.45)] hover:-translate-y-0.5 active:scale-95"
                >
                  Enroll Now
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column: Interview Banner Image */}
            <div className="w-full lg:w-[48%] flex justify-center lg:justify-end items-center relative">
              <div className="absolute inset-0 lg:inset-x-8 bg-gradient-to-tr from-[#30ACE2]/20 to-[#14224A]/10 rounded-3xl blur-2xl scale-95 -z-10" />
              <div className="relative w-full max-w-[540px] aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(20,34,74,0.12)] border border-slate-100 ring-1 ring-slate-900/5">
                <Image 
                  src="/images/interview-gd-banner.png" 
                  alt="Group Discussion and Personal Interview Preparation" 
                  fill
                  sizes="(max-w: 1024px) 100vw, 540px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. COURSES MODULE AT THE BOTTOM */}
     

    </div>
  );
}