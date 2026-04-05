import { NextResponse } from "next/server";

// Stub: Newsletter signup endpoint
// Will connect to Klaviyo or similar service
export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  if (!email || !email.includes("@")) {
    return NextResponse.json(
      { success: false, message: "Valid email required" },
      { status: 400 }
    );
  }

  // Placeholder — will integrate with email service
  console.log(`Newsletter signup: ${email}`);

  return NextResponse.json({
    success: true,
    message: "Thank you for subscribing.",
  });
}
