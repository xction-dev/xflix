"use client";

import "./Header.css";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header({ status }) {
  const [name, setName] = useState(null);

  useEffect(() => {
    const sessionName = sessionStorage.getItem("name");
    setName(sessionName);
  }, []);

  return (
    <div className="header-container">
      <Link href="/dashboard" className="logo">
        XFLIX
      </Link>
      {name && status === "dashboard" ? (
        <div className="">{name}님, 환영합니다!</div>
      ) : (
        <Link href="/login" className="login-btn">
          로그인
        </Link>
      )}
    </div>
  );
}
