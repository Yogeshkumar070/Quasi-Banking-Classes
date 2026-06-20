'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PopularCourses from "@/components/home/PopularCourses";

// ==========================================
// DATA & CONFIGURATIONS
// ==========================================

const examLogos = {
  sbi: "/images/exam/sbi-logo.png",
  ibps: "/images/exam/ibps-logo.jpg",
  lic: "/images/exam/lic-logo.jpg",
  nicl: "/images/exam/nicl-logo.png",
  niacl: "/images/exam/niacl-logo.png",
  oicl: "/images/exam/oicl-logo.png",
  gic: "/images/exam/gic-logo.png",
  rbi: "/images/exam/rbi-logo.png",
  nabard: "/images/exam/nabard-logo.png",
  sebi: "/images/exam/sebi-logo.png",
  sidbi: "/images/exam/sidbi-logo.png",
  nhb: "/images/exam/nhb-logo.png",
  idbi: "/images/exam/idbi-logo.png",
};

const popularExams = [
  { name: "SBI", logo: examLogos.sbi, bg: "bg-blue-50/60" },
  { name: "IBPS", logo: examLogos.ibps, bg: "bg-indigo-50/60" },
  { name: "RBI", logo: examLogos.rbi, bg: "bg-amber-50/60" },
  { name: "NABARD", logo: examLogos.nabard, bg: "bg-emerald-50/60" },
  { name: "LIC", logo: examLogos.lic, bg: "bg-yellow-50/60" },
  { name: "NIACL", logo: examLogos.niacl, bg: "bg-sky-50/60" },
  { name: "SEBI", logo: examLogos.sebi, bg: "bg-violet-50/60" },
  { name: "SIDBI", logo: examLogos.sidbi, bg: "bg-purple-50/60" },
];

const trustIndicators = [
  "500+ Mock Tests",
  "Latest Pattern",
  "Detailed Analytics",
  "Performance Tracking",
];

const freeMockTestData = [
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
];

const mockCategories = ["SBI Exams", "IBPS Exams", "Insurance", "Regulatory Bodies", "Other Exams", "All"];

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
};

const FALLBACK_LOGO = "/images/exam/bank-logo.png";

export default function MockTestsPage() {
  const [activeMockCategory, setActiveMockCategory] = useState("SBI Exams");

  const filteredMocks = activeMockCategory === "All" 
    ? freeMockTestData 
    : freeMockTestData.filter(exam => exam.category === activeMockCategory);

  const getExamLogo = (examName: string) => {
    const firstWord = examName.split(" ")[0].toLowerCase().replace(/[^a-z0-9]/g, '');
    return examPrefixLogos[firstWord] || FALLBACK_LOGO;
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#30ACE2]/20 selection:text-[#14224A]">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f5f7fb] to-[#eef5ff] border-b border-slate-200/60 pt-6 pb-4 lg:pt-8 lg:pb-6">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-4">
            
            {/* Left Column: Copy & CTA */}
            <div className="w-full lg:w-[42%] text-left space-y-3.5">
              <h1 className="text-3xl md:text-4xl lg:text-[38px] font-bold text-[#14224A] leading-[1.15] tracking-tight">
                Online Test Series for All Banking Exams
              </h1>
              
              <p className="text-[16px] text-slate-600 leading-relaxed max-w-[95%]">
                Attempt Mock Tests for all upcoming Banking exams like SBI PO, SBI Clerk, IBPS PO, IBPS Clerk, RBI Grade B &amp; More.
              </p>

              {/* Compact Trust Indicators Matrix */}
              <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-0.5">
                {trustIndicators.map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5 text-[14.5px] font-semibold text-[#14224A]/80">
                    <svg className="w-3.5 h-3.5 text-[#30ACE2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              
              {/* Premium Blue CTA Button */}
              <div className="pt-1">
                <Link 
                  href="/dashboard"
                  className="inline-flex justify-center items-center bg-[#30ACE2] hover:bg-[#2597c9] text-white px-8 py-3 rounded-full font-bold text-[16.5px] tracking-wide transition-all duration-300 shadow-[0_4px_14px_rgba(48,172,226,0.35)] hover:shadow-[0_6px_20px_rgba(48,172,226,0.45)] hover:-translate-y-0.5 active:scale-95"
                >
                  Attempt Now
                </Link>
              </div>
            </div>

            {/* Right Column: Banner Container */}
            <div className="w-full lg:w-[58%] flex justify-center lg:justify-end items-center relative">
              <div className="relative w-full max-w-[640px] aspect-[16/9] flex items-center justify-center mix-blend-multiply">
                <Image 
                  src="/images/mocktest-banner.png" 
                  alt="Banking Mock Tests Online Preparation" 
                  fill
                  sizes="(max-w: 1024px) 100vw, 640px"
                  className="object-contain mix-blend-multiply"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR BANKING GOAL */}
      <section className="relative z-20 -mt-3 pb-8 px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
        <div className="bg-white rounded-2xl p-4 md:p-5 shadow-[0_6px_20px_rgba(0,0,0,0.03)] border border-slate-100">
          <div className="mb-4 text-center">
            <h2 className="text-lg md:text-xl font-bold text-[#14224A] tracking-tight">
              Courses for All Banking Exams
            </h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {popularExams.map((exam, idx) => (
              <div 
                key={`${exam.name}-${idx}`}
                className="group flex flex-col items-center justify-center text-center bg-white p-3 rounded-xl border border-slate-100 hover:border-[#30ACE2]/40 transition-all duration-200 hover:shadow-md"
              >
                <div className={`relative w-11 h-11 flex-shrink-0 ${exam.bg} rounded-xl p-2 mb-2 transition-colors group-hover:bg-[#30ACE2]/10`}>
                  <Image 
                    src={exam.logo} 
                    alt={`${exam.name} Identity Brand Badge`} 
                    fill 
                    sizes="44px"
                    className="object-contain p-0.5 mix-blend-multiply"
                  />
                </div>
                <span className="font-bold text-[#14224A] text-[13.5px] tracking-tight leading-none uppercase">
                  {exam.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ATTEMPT FREE MOCK TESTS SECTION */}
      <section className="py-14 bg-gray-50 border-t border-b border-slate-100 font-sans">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-9">
            <h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 tracking-tight leading-tight">
              Attempt Free <span className="text-[#30ACE2]">Mock Tests</span>
            </h2>
            <p className="mt-3 text-[18px] text-gray-600 font-medium">
              Select your exam below to evaluate your performance with standard dynamic test papers.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="w-full flex justify-center mb-8">
            <div className="flex overflow-x-auto bg-white p-1 rounded-xl shadow-sm border border-gray-200/80 gap-1 w-full md:w-max max-w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {mockCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveMockCategory(category)}
                  className={`whitespace-nowrap px-5 py-2 rounded-lg text-[15px] font-bold transition-all duration-200 cursor-pointer ${
                    activeMockCategory === category
                      ? "bg-[#30ACE2] text-white shadow-sm"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Exam Cards Grid */}
          <div key={activeMockCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {filteredMocks.map((exam, index) => {
              const logoSrc = getExamLogo(exam.name);
              
              return (
                <Link href={`/mock-test/${exam.name.toLowerCase().replace(/\s+/g, '-')}`} key={index}>
                  <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-[0_6px_20px_rgba(48,172,226,0.12)] hover:border-sky-300 transition-all duration-300 group cursor-pointer flex items-center gap-4 hover:-translate-y-0.5">
                    
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
                      <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[#30ACE2] transition-colors line-clamp-2 leading-snug">
                        {exam.name}
                      </h3>
                    </div>

                    {/* Clickable Arrow */}
                    <div className="text-gray-300 group-hover:text-[#30ACE2] transition-colors">
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

      {/* 4. ORIGINAL EXTERNAL POPULAR COURSES SECTION */}
      
      
    </div>
  );
}
