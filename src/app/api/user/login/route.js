import { NextResponse } from "next/server";
import { findMissingKeysInObject } from "@/utils-server/validate";
import { getDB } from "@/utils-server/db";

export async function POST(request) {
  const requestBody = await request.json();

  /**
   * 리퀘스트 유효성 확인
   */
  const missingKeys = findMissingKeysInObject(requestBody, [
    "username",
    "password",
  ]);
  if (missingKeys.length > 0) {
    return NextResponse.json(
      {
        message: `Missing keys: ${missingKeys.join(", ")}`,
      },
      { status: 400 },
    );
  }

  /**
   * DB 연결
   */
  const db = await getDB();

  /**
   * user 체크
   */
  const findResult = await db
    .collection("user")
    .findOne(requestBody, { projection: { name: 1 } });
  if (!findResult) {
    return NextResponse.json(
      {
        message: "Username or password is wrong",
      },
      { status: 400 },
    );
  }

  return NextResponse.json({ isLoginSuccess: true, name: findResult.name });
}
