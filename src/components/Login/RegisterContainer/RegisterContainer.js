"use client";

import IDInput from "../IDInput/IDInput";
import PWInput from "../PWInput/PWInput";
import NameInput from "../NameInput/NameInput";
import SubmitButton from "../../SubmitButton/SubmitButton";
import "./RegisterContainer.css";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterContainer() {
  const [IDRegisterValue, setIDRegisterValue] = useState("");
  const [PWRegisterValue, setPWRegisterValue] = useState("");
  const [PWConfirmValue, setPWConfirmValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter();

  const handleRegister = async () => {
    console.log("hi");
    const apiUrl = "/api/users/register"; // 서버 API 엔드포인트 URL

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameValue,
          username: IDRegisterValue,
          password: PWRegisterValue,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.isRegisterSuccess) {
          // 회원가입에 성공하면 로그인 페이지로 이동
          router.push("/login");
        }
      } else {
        const data = await response.json();
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setErrorMessage("An error occurred while registering.");
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-txt">회원가입</h2>
      <IDInput
        inputValue={IDRegisterValue}
        setInputValue={setIDRegisterValue}
      />
      <PWInput
        status="original"
        inputValue={PWRegisterValue}
        setInputValue={setPWRegisterValue}
      />
      <PWInput
        status="confirm"
        inputValue={PWConfirmValue}
        setInputValue={setPWConfirmValue}
      />
      <NameInput inputValue={nameValue} setInputValue={setNameValue} />
      <SubmitButton onClick={handleRegister} status="register" />
      {errorMessage && <p>오류: {errorMessage}</p>}
    </div>
  );
}
