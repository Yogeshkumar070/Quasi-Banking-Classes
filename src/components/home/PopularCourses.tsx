'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Grouped Exam Data
const examData = [
  // SBI
  { name: "SBI PO", category: "SBI Exams" },
  { name: "SBI Clerk", category: "SBI Exams" },
  { name: "SBI SO", category: "SBI Exams" },
  { name: "SBI CBO", category: "SBI Exams" },
  { name: "SBI Apprentice", category: "SBI Exams" },
  
  // IBPS
  { name: "IBPS PO", category: "IBPS Exams" },
  { name: "IBPS Clerk", category: "IBPS Exams" },
  { name: "IBPS SO", category: "IBPS Exams" },
  { name: "IBPS RRB PO", category: "IBPS Exams" },
  { name: "IBPS RRB Clerks", category: "IBPS Exams" },
  { name: "IBPS SO AFO", category: "IBPS Exams" },
  
  // Insurance
  { name: "LIC AAO", category: "Insurance" },
  { name: "LIC Assistant", category: "Insurance" },
  { name: "LIC ADO", category: "Insurance" },
  { name: "LIC HFL", category: "Insurance" },
  { name: "NICL AO", category: "Insurance" },
  { name: "NIACL AO", category: "Insurance" },
  { name: "NIACL Assistant", category: "Insurance" },
  { name: "OICL AO", category: "Insurance" },
  { name: "GIC Assistant Manager", category: "Insurance" },
  
  // Regulatory Bodies
  { name: "RBI Assistants", category: "Regulatory Bodies" },
  { name: "RBI Officers Grade - B", category: "Regulatory Bodies" },
  { name: "NABARD Grade-A", category: "Regulatory Bodies" },
  { name: "NABARD Assistant", category: "Regulatory Bodies" },
  { name: "SEBI Grade-A", category: "Regulatory Bodies" },
  { name: "SIDBI Grade-A", category: "Regulatory Bodies" },
  { name: "NHB Assistant Manager", category: "Regulatory Bodies" },
  
  // Other Exams
  { name: "IDBI Assistant Manager", category: "Other Exams" },
  { name: "IDBI Executive", category: "Other Exams" },
  { name: "IDBI Junior Assistant", category: "Other Exams" },
  { name: "ECGC PO", category: "Other Exams" },
  { name: "EPFO Assistant", category: "Other Exams" },
  { name: "FCI Manager", category: "Other Exams" },
  { name: "IB ACIO", category: "Other Exams" },
  { name: "ESIC Recruitment", category: "Other Exams" },
  { name: "ESIC SSO", category: "Other Exams" },
  { name: "Indian Bank PO", category: "Other Exams" },
  { name: "South Indian Bank", category: "Other Exams" },
  { name: "Karnataka Bank PO", category: "Other Exams" },
  { name: "Central Bank of India", category: "Other Exams" },
  { name: "VCB Bank", category: "Other Exams" },
  { name: "NAINITAL Bank", category: "Other Exams" },
]

// Ordered Categories - "All" moved to the very end
const categories = ["SBI Exams", "IBPS Exams", "Insurance", "Regulatory Bodies", "Other Exams", "All"]

// Dynamic Logo Dictionary based on the FIRST WORD of the exam name (lowercase)
const examPrefixLogos: Record<string, string> = {
  "sbi": "/images/exam/sbi-logo.png",
  "ibps": "/images/exam/ibps-logo.jpg",
  "lic": "/images/exam/lic-logo.jpg",
  "nicl": "/images/exam/nicl-logo.png",
  "niacl": "/images/exam/niacl-logo.png",
  "oicl": "/images/exam/oicl-logo.png",
  "gic": "/images/exam/gic-logo.png",
  "rbi": "/images/exam/rbi-logo.png",
  "nabard": "/images/exam/nabard-logo.png",
  "sebi": "/images/exam/sebi-logo.png",
  "sidbi": "/images/exam/sidbi-logo.png",
  "nhb": "/images/exam/nhb-logo.png",
  "idbi": "/images/exam/idbi-logo.png",
}

// Global generic fallback logo path if an unexpected first word pops up
const FALLBACK_LOGO = "/images/exam/bank-logo.png"

export default function PopularCourses() {
  // Start with SBI Exams so the screen isn't flooded on initial load
  const [activeCategory, setActiveCategory] = useState("SBI Exams")

  const filteredExams = activeCategory === "All" 
    ? examData 
    : examData.filter(exam => exam.category === activeCategory)

  // Helper function to extract and match logos by the first word dynamically
  const getExamLogo = (examName: string) => {
    const firstWord = examName.split(" ")[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    return examPrefixLogos[firstWord] || FALLBACK_LOGO;
  }

  return (
    <section className="py-14 bg-gray-50 font-sans">
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-9">
          <h2 className="text-[32px] md:text-[40px] font-extrabold text-gray-900 tracking-tight leading-tight">
            Choose Your <span className="text-[#4a80ed]">Exam</span>
          </h2>
          <p className="mt-3 text-[18px] text-gray-600 font-medium">
            Select your target exam to explore dedicated courses, mock tests, and study materials.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="w-full flex justify-center mb-8">
          <div className="flex overflow-x-auto bg-white p-1 rounded-xl shadow-sm border border-gray-200/80 gap-1 w-full md:w-max max-w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap px-4.5 py-2 rounded-lg text-[15px] font-bold transition-all duration-200 cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#4a80ed] text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Exam Cards Grid */}
        <div key={activeCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {filteredExams.map((exam, index) => {
            const logoSrc = getExamLogo(exam.name);
            
            return (
              <Link href={`/exam/${exam.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-[0_6px_20px_rgba(74,128,237,0.12)] hover:border-blue-300 transition-all duration-300 group cursor-pointer flex items-center gap-4 hover:-translate-y-0.5">
                  
                  {/* Dynamic Individual Exam Logo */}
                  <div className="w-12 h-12 rounded-full border border-gray-100 p-1 flex items-center justify-center bg-white shadow-sm overflow-hidden flex-shrink-0 relative">
                     <Image 
                        src={logoSrc} 
                        alt={`${exam.name} Logo`}
                        fill
                        className="object-contain p-1"
                        sizes="48px"
                     />
                  </div>

                  {/* Exam Name */}
                  <div className="flex-1">
                    <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-blue-700 transition-colors line-clamp-2 leading-snug">
                      {exam.name}
                    </h3>
                  </div>

                  {/* Clickable Arrow */}
                  <div className="text-gray-300 group-hover:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  )
}
