'use client'

import React, { useState } from 'react'

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  // Navigation & Form States
  const [step, setStep] = useState<'phone' | 'password' | 'register'>('phone')
  const [mobileNumber, setMobileNumber] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('') 
  const [userName, setUserName] = useState('') 
  
  // Security & UX States
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  if (!isOpen) return null;

  // 1. Check Mobile Number (Real API Call to Supabase)
  const handlePhoneSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileNumber.length < 10) return;
    
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/check-mobile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mobile: mobileNumber }),
      });

      if (!response.ok) {
        throw new Error("Failed to connect to the server.");
      }

      const result = await response.json();
      
      if (result.exists) {
        setUserName(result.user.name);
        setStep("password");
      } else {
        setStep("register");
      }

    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  // 2. Login User (Real API Call with Token and Cookie Setup)
  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: mobileNumber,
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || "Login failed");
        return;
      }

      // Success! Push directly to protected dashboard route
      window.location.href = "/dashboard";
      
    } catch (err) {
      console.error(err);
      setError('Invalid password or connection error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  // 3. Register User (Real API Call to Supabase)
  const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.length < 3) {
      setError('Please enter your full name.');
      return;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mobile: mobileNumber,
          name: fullName,
          email: email,
          password: password
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Registration failed');
      }

      // REGISTRATION SUCCESSFUL! 
      // Seamlessly switch to the Login step
      setUserName(fullName);
      setPassword(''); // Clear the password for security
      setConfirmPassword('');
      setStep('password');
      
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  // Reset modal when closing or going back
  const handleBackToPhone = () => {
    setStep('phone');
    setPassword('');
    setConfirmPassword('');
    setFullName('');
    setEmail('');
    setUserName('');
    setError('');
  }

  return (
    // 60-70% Dark Blurred Background
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Main PW-Style White Verification Card */}
      <div className="relative bg-white rounded-xl w-full max-w-[550px] min-h-[580px] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Top Right Close Button (X) */}
        <button 
          onClick={onClose}
          disabled={isLoading}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 transition-colors z-20 disabled:opacity-50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="flex-1 flex flex-col pt-16 pb-8">
          
          {/* Custom Illustration - Wavy Yellow Badge with Phone */}
          <div className="flex justify-center mb-10 relative">
            <div className="relative flex items-center justify-center w-36 h-36">
              <svg viewBox="0 0 100 100" className="absolute w-full h-full text-[#fef08a] drop-shadow-sm">
                <path d="M50 2.5 L56 8.5 L64.5 7 L69 14.5 L77.5 15 L80 23 L88 25 L88.5 33.5 L95.5 37 L93.5 45.5 L99 50 L93.5 54.5 L95.5 63 L88.5 66.5 L88 75 L80 77 L77.5 85 L69 85.5 L64.5 93 L56 91.5 L50 97.5 L44 91.5 L35.5 93 L31 85.5 L22.5 85 L20 77 L12 75 L11.5 66.5 L4.5 63 L6.5 54.5 L1 50 L6.5 45.5 L4.5 37 L11.5 33.5 L12 25 L20 23 L22.5 15 L31 14.5 L35.5 7 L44 8.5 Z" fill="currentColor" stroke="#1f2937" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <div className="relative z-10 w-12 h-20 bg-white border-[1.5px] border-gray-800 rounded-lg flex flex-col items-center pt-2 pb-3 shadow-sm">
                <div className="w-3.5 h-1 bg-gray-800 rounded-full mb-1.5" />
                <div className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center text-white text-[9px] font-black tracking-tighter mb-2">QBC</div>
                <div className="w-6 h-1.5 bg-[#fde047] rounded-full mb-1" />
                <div className="w-6 h-1.5 bg-[#fde047] rounded-full" />
              </div>
            </div>
          </div>

          {/* Global Error Banner */}
          {error && (
            <div className="mx-10 mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-[13px] font-semibold text-center animate-in fade-in slide-in-from-top-2">
              {error}
            </div>
          )}

          {/* STEP 1: MOBILE NUMBER INPUT */}
          {step === 'phone' && (
            <div className="w-full px-10 animate-in fade-in duration-300">
              
              <div className="flex items-center gap-3 mb-6">
                <h2 className="text-[22px] font-medium text-gray-800">
                  Please enter your Mobile Number
                </h2>
                <span className="bg-[#fde047] border border-gray-800 rounded-full px-2 py-1 flex items-center justify-center gap-0.5">
                  <span className="w-1 h-1 bg-white rounded-full border border-gray-400"></span>
                  <span className="w-1 h-1 bg-white rounded-full border border-gray-400"></span>
                  <span className="w-1 h-1 bg-white rounded-full border border-gray-400"></span>
                </span>
              </div>

              <form onSubmit={handlePhoneSubmit}>
                <div className={`flex items-center border rounded-[4px] overflow-hidden h-[50px] mb-12 transition-all ${isLoading ? 'bg-gray-50 border-gray-200' : 'border-[#6366f1] bg-white'}`}>
                  <div className="flex items-center gap-2 px-4 h-full border-r border-gray-200 text-gray-500 font-medium text-[15px]">
                    IN +91
                    <svg className="w-4 h-4 fill-current text-gray-400" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                  <input 
                    type="tel" 
                    placeholder="E.g 9877654335" 
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    disabled={isLoading}
                    className="flex-1 w-full h-full px-4 outline-none text-gray-800 font-medium placeholder:text-gray-400 text-[15px] disabled:bg-gray-50 bg-transparent"
                    autoFocus
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={mobileNumber.length < 10 || isLoading}
                  className="w-full text-white font-medium text-[16px] py-[14px] rounded-[4px] transition-all disabled:opacity-100 flex justify-center items-center h-[52px]"
                  style={{ backgroundColor: mobileNumber.length === 10 && !isLoading ? '#4a80ed' : '#8c8c8c' }}
                >
                  {isLoading ? <Spinner /> : 'Continue'}
                </button>
              </form>
            </div>
          )}

          {/* STEP 2: PASSWORD (EXISTING USER) */}
          {step === 'password' && (
            <div className="w-full px-10 animate-in fade-in duration-300">
              <h2 className="text-[22px] font-medium text-gray-800 mb-2">
                Welcome Back, {userName}! 👋
              </h2>
              <p className="text-[15px] text-gray-500 mb-6">Enter password for +91 {mobileNumber}</p>
              
              <form onSubmit={handleLoginSubmit}>
                <div className={`flex items-center border rounded-[4px] overflow-hidden h-[50px] mb-8 transition-all ${isLoading ? 'bg-gray-50 border-gray-200' : 'border-[#6366f1] bg-white'}`}>
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 w-full h-full px-4 outline-none text-gray-800 font-medium placeholder:text-gray-400 text-[15px] disabled:bg-gray-50 bg-transparent"
                    autoFocus
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-[#4a80ed] hover:bg-blue-600 disabled:bg-blue-400 text-white font-medium text-[16px] py-[14px] rounded-[4px] transition-colors flex justify-center items-center h-[52px]"
                >
                  {isLoading ? <Spinner /> : 'Login'}
                </button>
              </form>
              <button type="button" onClick={handleBackToPhone} disabled={isLoading} className="w-full mt-6 text-[14px] text-blue-600 hover:text-blue-800 font-medium disabled:opacity-50 cursor-pointer">
                Change Mobile Number
              </button>
            </div>
          )}

          {/* STEP 3: REGISTER (NEW USER) */}
          {step === 'register' && (
            <div className="w-full px-10 animate-in fade-in duration-300">
              <h2 className="text-[22px] font-medium text-gray-800 mb-2">Create Account</h2>
              <p className="text-[15px] text-gray-500 mb-6">Registering +91 {mobileNumber}</p>
              
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div className={`flex items-center border rounded-[4px] overflow-hidden h-[50px] transition-all ${isLoading ? 'bg-gray-50 border-gray-200' : 'border-[#6366f1] bg-white'}`}>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 w-full h-full px-4 outline-none text-gray-800 font-medium placeholder:text-gray-400 text-[15px] disabled:bg-gray-50 bg-transparent"
                    autoFocus 
                  />
                </div>
                <div className={`flex items-center border rounded-[4px] overflow-hidden h-[50px] transition-all ${isLoading ? 'bg-gray-50 border-gray-200' : 'border-[#6366f1] bg-white'}`}>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 w-full h-full px-4 outline-none text-gray-800 font-medium placeholder:text-gray-400 text-[15px] disabled:bg-gray-50 bg-transparent"
                  />
                </div>
                <div className={`flex items-center border rounded-[4px] overflow-hidden h-[50px] transition-all ${isLoading ? 'bg-gray-50 border-gray-200' : 'border-[#6366f1] bg-white'}`}>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 w-full h-full px-4 outline-none text-gray-800 font-medium placeholder:text-gray-400 text-[15px] disabled:bg-gray-50 bg-transparent"
                  />
                </div>
                <div className={`flex items-center border rounded-[4px] overflow-hidden h-[50px] transition-all ${isLoading ? 'bg-gray-50 border-gray-200' : 'border-[#6366f1] bg-white'}`}>
                  <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={isLoading}
                    className="flex-1 w-full h-full px-4 outline-none text-gray-800 font-medium placeholder:text-gray-400 text-[15px] disabled:bg-gray-50 bg-transparent"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-[#4a80ed] hover:bg-blue-600 disabled:bg-blue-400 text-white font-medium text-[16px] py-[14px] rounded-[4px] mt-2 transition-colors flex justify-center items-center h-[52px]"
                >
                  {isLoading ? <Spinner /> : 'Register Now'}
                </button>
              </form>
              <button type="button" onClick={handleBackToPhone} disabled={isLoading} className="w-full mt-4 text-[14px] text-blue-600 hover:text-blue-800 font-medium disabled:opacity-50 cursor-pointer">
                Change Mobile Number
              </button>
            </div>
          )}

        </div>

        {/* PW Style Footer */}
        <div className="absolute bottom-6 w-full text-center px-6">
          <p className="text-[13px] text-gray-500 font-medium tracking-wide">
            By continuing you agree to our <span className="text-blue-600 cursor-pointer hover:underline">Terms of use & Privacy Policy</span>
          </p>
        </div>

      </div>
    </div>
  )
}

// Simple internal SVG Spinner component for the loading state
const Spinner = () => (
  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
)