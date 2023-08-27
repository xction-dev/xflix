import { getDB } from "@/utils-server/db";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const db = await getDB();
  const item = await db
    .collection("content")
    .findOne({ id: params.content_id });
  if (!item) {
    return NextResponse.json(
      { code: 20, message: "Content not found" },
      { status: 404 },
    );
  }
  return NextResponse.json(item);
}
