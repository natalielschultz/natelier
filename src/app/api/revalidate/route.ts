import { NextResponse } from "next/server";

// Stub: Shopify webhook handler for revalidating cached data
// Will be implemented when Shopify integration is added
export async function POST() {
  return NextResponse.json({ revalidated: false, message: "Not yet implemented" });
}
