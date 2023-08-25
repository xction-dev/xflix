import { getDB } from "@/utils-server/db";
import { NextResponse } from "next/server";

export async function GET(){
  const db = await getDB()
  const curations = await db.collection("curation").find().toArray();
  const items = await Promise.all(
    curations.map(async (curation)=>{
      const contents = await db.collection("content").find(curation.query).toArray();
      return {...curation, contents };
    })
  );
  return NextResponse.json({ items });
}