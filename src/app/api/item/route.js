import content from "@/mock/contents.json"
import { NextResponse } from "next/server";

export async function GET(){
  return NextResponse.json({ items: content})
}