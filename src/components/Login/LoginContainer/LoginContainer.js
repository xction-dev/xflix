"use client";

import IDInput from "../IDInput/IDInput";
import PWInput from "../PWInput/PWInput";
import SubmitButton from "../../SubmitButton/SubmitButton";
import "./LoginContainer.css";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginContainer() {
  const [IDInputValue, setIDInputValue] = useState("");
  const [PWInputValue, setPWInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleLogin = async () => {
    const apiUrl = "/api/users/login"; // 서버 API 엔드포인트 URL

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
          username: IDInputValue,
          password: PWInputValue,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.isLoginSuccess) {
          // 로그인에 성공하면 dashboard 페이지로 이동
          router.push("/dashboard");
          // name 정보를 sessionStorage에 저장
          sessionStorage.setItem("name", data.name);
        }
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred while login.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-txt">로그인</h2>
      <IDInput inputValue={IDInputValue} setInputValue={setIDInputValue} />
      <PWInput
        status="original"
        inputValue={PWInputValue}
        setInputValue={setPWInputValue}
      />
      <SubmitButton onClick={handleLogin} status="login" />
    </div>
  );
}
