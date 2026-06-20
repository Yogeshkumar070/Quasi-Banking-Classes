import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  quickLinks: [
    { name: "Explore Courses", href: "/#explore" },
    { name: "Mock Test Series", href: "/#mock-tests" },
    { name: "Interview & GD Prep", href: "/#interview-gd" },
    { name: "Daily Current Affairs", href: "/#current-affairs" },
    { name: "Success Stories", href: "/#testimonials" },
  ],
  popularExams: [
    { name: "SBI PO & Clerk", href: "#" },
    { name: "IBPS PO & Clerk", href: "#" },
    { name: "RBI Grade B", href: "#" },
    { name: "NABARD Grade A", href: "#" },
    { name: "LIC AAO / ADO", href: "#" },
  ],
  supportLegal: [
    { name: "Help & Support", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Contact Us", href: "#" },
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1128] pt-16 pb-8 border-t-[4px] border-[#30ACE2] font-sans">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Column (Wider) */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1.5 shadow-[0_0_15px_rgba(48,172,226,0.3)]">
                <Image 
                  src="/images/logo.jpeg" 
                  alt="QBC Logo" 
                  fill
                  className="object-contain rounded-lg"
                  sizes="48px"
                />
              </div>
              <div>
                <span className="block text-[22px] font-black text-white tracking-tight leading-none group-hover:text-[#30ACE2] transition-colors">QUASI</span>
                <span className="text-[12px] font-bold text-[#30ACE2] tracking-widest uppercase mt-1 block">Banking Classes</span>
              </div>
            </Link>
            <p className="text-[#8A9BCA] text-[15px] leading-relaxed mb-6 font-medium pr-4">
              Your trusted partner for Banking & Insurance exams. We provide top-tier preparation, expert faculty, and authentic mock tests to ensure your selection.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:support@quasibanking.com" className="inline-flex items-center gap-3 text-[#8A9BCA] hover:text-[#30ACE2] transition-colors font-medium text-[15px]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                support@quasibanking.com
              </a>
              <a href="tel:+919876543210" className="inline-flex items-center gap-3 text-[#8A9BCA] hover:text-[#30ACE2] transition-colors font-medium text-[15px]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-[17px] mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3.5">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-[#8A9BCA] hover:text-[#F2DD4C] text-[15px] font-medium transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#30ACE2] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Exams Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-[17px] mb-6 tracking-wide">Popular Exams</h3>
            <ul className="space-y-3.5">
              {footerLinks.popularExams.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-[#8A9BCA] hover:text-[#30ACE2] text-[15px] font-medium transition-colors inline-flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EB8317] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Legal Column */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-[17px] mb-6 tracking-wide">Support & Legal</h3>
            <ul className="space-y-3.5">
              {footerLinks.supportLegal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-[#8A9BCA] hover:text-white text-[15px] font-medium transition-colors inline-flex items-center gap-2 group">
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Telegram Community Button */}
            <div className="mt-8">
              <a href="#" className="inline-flex items-center justify-center gap-2 w-full bg-[#30ACE2]/10 hover:bg-[#30ACE2] border border-[#30ACE2]/30 hover:border-[#30ACE2] text-[#30ACE2] hover:text-white py-3 px-4 rounded-xl font-bold transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a5.8 5.8 0 00-.056.013zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.892-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Join Telegram Channel
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

        {/* Bottom Footer: Copyright & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#8A9BCA] text-[14px] font-medium">
            &copy; {currentYear} Quasi Banking Classes. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#162454] flex items-center justify-center text-[#8A9BCA] hover:text-white hover:bg-[#30ACE2] transition-all duration-300 transform hover:-translate-y-1">
              <span className="sr-only">Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#162454] flex items-center justify-center text-[#8A9BCA] hover:text-white hover:bg-[#30ACE2] transition-all duration-300 transform hover:-translate-y-1">
              <span className="sr-only">Instagram</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#162454] flex items-center justify-center text-[#8A9BCA] hover:text-white hover:bg-[#EB8317] transition-all duration-300 transform hover:-translate-y-1">
              <span className="sr-only">YouTube</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#162454] flex items-center justify-center text-[#8A9BCA] hover:text-white hover:bg-[#30ACE2] transition-all duration-300 transform hover:-translate-y-1">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}