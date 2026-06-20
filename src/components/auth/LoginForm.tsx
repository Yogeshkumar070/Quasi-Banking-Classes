'use client';

import Link from "next/link";
import AuthCard from "./AuthCard";

export default function LoginForm() {
  return (
    <AuthCard>

      <div className="text-center">

        <h1 className="text-3xl font-bold text-[#30ACE2]">
          QBC
        </h1>

        <h2 className="mt-3 text-2xl font-bold text-gray-900">
          Welcome Back
        </h2>

        <p className="mt-2 text-gray-500">
          Login to continue learning
        </p>

      </div>

      <form className="mt-8 space-y-5">

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Mobile Number
          </label>

          <input
            type="tel"
            placeholder="Enter mobile number"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#30ACE2]"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#30ACE2]"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-[#30ACE2] py-3 font-semibold text-white transition hover:opacity-90"
        >
          Login
        </button>

      </form>

      <div className="mt-6 flex justify-between text-sm">

        <button className="text-[#30ACE2]">
          Forgot Password?
        </button>

        <Link
          href="/register"
          className="font-semibold text-[#30ACE2]"
        >
          Create Account
        </Link>

      </div>

    </AuthCard>
  );
}