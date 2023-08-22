import { connectDB } from "@/utility/db";
import { NextResponse } from "next/server";

export async function GET(){
  const client = await connectDB;
  const db = client.db("xflix");
  const contents = await db.collection("content").find().toArray();
  return NextResponse.json({ items: contents })
}