import { NextResponse } from "next/server";

export async function POST(request) {
  const requestBody = await request.json();
  return NextResponse.json({ data: requestBody });
}
