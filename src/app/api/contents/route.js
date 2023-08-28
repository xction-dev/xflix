import { getDB } from "@/utils-server/db";
import { NextResponse } from "next/server";

export async function GET() {
  const db = await getDB();
  const contents = await db.collection("content").find().toArray();
  return NextResponse.json({ items: contents });
}
