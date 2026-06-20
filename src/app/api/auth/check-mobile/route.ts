import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase"; // Now this will connect properly!

export async function POST(req: Request) {
  try {
    const { mobile } = await req.json();

    if (!mobile) {
      return NextResponse.json({ error: "Mobile number is required" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("users")
      .select("id,name,mobile")
      .eq("mobile", mobile)
      .maybeSingle();

    if (error) {
      console.error("Supabase Query Error:", error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({
      exists: !!data,
      user: data || null,
    });

  } catch (err) {
    console.error("API Route Error:", err);
    return NextResponse.json(
      { error: "Server Error" },
      { status: 500 }
    );
  }
}