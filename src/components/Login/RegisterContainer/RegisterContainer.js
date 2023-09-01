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
  const [registerSuccess, setRegisterSuccess] = useState(false);
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
          setRegisterSuccess(true);
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

  // '가입' 버튼의 Action을 회원가입 성공 여부에 따라 제어하는 함수
  const handleButtonAction = async () => {
    if (registerSuccess === true) {
      // 성공한 경우 다른 페이지로 이동
      router.push("/login");
    } else {
      // 아직 작업을 실행하지 않은 경우
      try {
        await handleRegister(); // 회원가입 요청 완료를 기다림
        setRegisterSuccess(true);
      } catch (error) {
        // 오류 처리
        console.error("An error occurred:", error);
      }
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
      <SubmitButton onClick={handleButtonAction} status="register" />
      {registerSuccess && <p>회원가입이 성공적으로 완료되었습니다.</p>}
      {errorMessage && <p>오류: {errorMessage}</p>}
    </div>
  );
}
