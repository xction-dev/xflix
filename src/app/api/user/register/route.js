import { NextResponse } from "next/server";
import { findMissingKeysInObject } from "@/utils-server/validate";
import { getDB } from "@/utils-server/db";

export async function POST(request) {
  const requestBody = await request.json();

  /**
   * 리퀘스트 유효성 확인
   */
  const missingKeys = findMissingKeysInObject(requestBody, [
    "name",
    "username",
    "password",
  ]);
  if (missingKeys.length > 0) {
    return NextResponse.json(
      {
        code: 0,
        message: `Missing keys in request: ${missingKeys.join(", ")}`,
      },
      { status: 400 },
    );
  }

  const { name, username, password } = requestBody;

  /**
   * DB 연결
   */
  const db = await getDB();

  /**
   * username 중복 체크
   */
  const userWithSameUsername = await db
    .collection("user")
    .findOne({ username });
  if (userWithSameUsername) {
    return NextResponse.json(
      {
        code: 10,
        message: "Username already exists",
      },
      { status: 400 },
    );
  }

  /**
   * user 삽입
   */
  const date = new Date();
  const insertResult = await db.collection("user").insertOne({
    type: "test",
    name,
    username,
    password,
    createdAt: date,
    updatedAt: date,
  });

  /**
   * user 추가
   */
  if (insertResult.insertedCount !== 1) {
    return NextResponse.json(
      {
        code: 11,
        message: "Failed to insert user",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ isRegisterSuccess: true });
}
