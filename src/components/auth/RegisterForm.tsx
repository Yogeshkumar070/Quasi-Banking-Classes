'use client';

import Link from "next/link";
import AuthCard from "./AuthCard";

export default function RegisterForm() {
  return (
    <AuthCard>

      <div className="text-center">

        <h1 className="text-3xl font-bold text-[#30ACE2]">
          QBC
        </h1>

        <h2 className="mt-3 text-2xl font-bold text-gray-900">
          Create Account
        </h2>

        <p className="mt-2 text-gray-500">
          Start your banking journey
        </p>

      </div>

      <form className="mt-8 space-y-5">

        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#30ACE2]"
        />

        <input
          type="tel"
          placeholder="Mobile Number"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#30ACE2]"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#30ACE2]"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#30ACE2]"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-[#30ACE2] py-3 font-semibold text-white"
        >
          Create Account
        </button>

      </form>

      <div className="mt-6 text-center text-sm">

        <span className="text-gray-500">
          Already have an account?
        </span>

        <Link
          href="/login"
          className="ml-2 font-semibold text-[#30ACE2]"
        >
          Login
        </Link>

      </div>

    </AuthCard>
  );
}