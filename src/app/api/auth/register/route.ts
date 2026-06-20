import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import bcrypt from "bcryptjs";

// CRITICAL: Notice how it says "export async function POST", NOT "export default"
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { mobile, name, email, password } = body;

    // 1. Validation
    if (!mobile || !name || !email || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // 2. Extra Safety: Check if user already exists
    const { data: existingUser } = await supabase
      .from("users")
      .select("id")
      .eq("mobile", mobile)
      .maybeSingle();

    if (existingUser) {
      return NextResponse.json({ error: "Mobile number already registered" }, { status: 409 });
    }

    // 3. Hash the password securely
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    // 4. Insert into Supabase
    const { error } = await supabase
      .from("users")
      .insert([
        {
          mobile: mobile,
          name: name,
          email: email,
          password_hash: password_hash,
          role: 'student' // Default role
        }
      ]);

    if (error) {
      console.error("Supabase Insert Error:", error);
      if (error.code === '23505') {
         return NextResponse.json({ error: "User with this email or mobile already exists" }, { status: 409 });
      }
      return NextResponse.json({ error: "Failed to create account" }, { status: 500 });
    }

    // 5. Return success JSON
    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("Register API Error:", err);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}