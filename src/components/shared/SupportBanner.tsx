import React from 'react';
import Image from 'next/image';

export default function SupportBanner() {
  return (
    <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 my-12">
      {/* Pure white on the left to perfectly hide the image's white background, smoothly transitioning to a soft brand blue on the right */}
      <div className="relative flex flex-col md:flex-row items-center bg-gradient-to-r from-white from-35% via-[#f0f9ff] to-[#30ACE2]/25 rounded-2xl px-6 md:px-12 py-6 md:py-8 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100">

        {/* 1. Left Side: Illustration (Size significantly increased, background blurs removed for a seamless blend) */}
        <div className="relative w-[180px] h-[160px] md:w-[240px] md:h-[200px] flex-shrink-0 z-10 mb-6 md:mb-0 md:-ml-4">
          <Image
            src="/images/support-agent2.png" 
            alt="Expert Student Counsellor"
            fill
            className="object-contain mix-blend-darken"
            sizes="(max-w: 768px) 180px, 240px"
            priority
          />
        </div>

        {/* 2. Right Side: Text & Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between flex-grow md:ml-8 z-10 w-full gap-8">
          
          {/* Text block (Ultra-clean and perfectly aligned) */}
          <div className="text-center sm:text-left">
            <h3 className="text-[28px] md:text-[34px] font-black text-[#14224A] tracking-tight leading-tight mb-2">
              Confused? Request a Call Back
            </h3>
            <p className="text-[16px] md:text-[18px] text-[#14224A]/80 font-semibold">
              Our Expert Student Counsellors will guide you!
            </p>
          </div>

          {/* Single Centered Button (Increased size, highly visible) */}
          <div className="flex items-center justify-center flex-shrink-0">
            <button className="bg-[#14224A] hover:bg-[#1d3063] text-white px-12 py-4 rounded-xl font-extrabold text-[18px] tracking-wide transition-all shadow-[0_4px_14px_rgba(20,34,74,0.25)] hover:shadow-[0_6px_20px_rgba(20,34,74,0.35)] active:scale-95 whitespace-nowrap cursor-pointer">
              Request a Call
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}