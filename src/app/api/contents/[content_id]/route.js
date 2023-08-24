import { getDB } from "@/utility/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }){
  const db = await getDB();
  const item = await db.collection("content").findOne({ id: params.content_id });
  return NextResponse.json(item);
}