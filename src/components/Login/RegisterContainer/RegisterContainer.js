"use client";

import IDInput from "../IDInput/IDInput";
import PWInput from "../PWInput/PWInput";
import NameInput from "../NameInput/NameInput";
import SubmitButton from "../../SubmitButton/SubmitButton";
import "./RegisterContainer.css";

import React, { useState } from "react";

export default function RegisterContainer() {
  const [IDRegisterValue, setIDRegisterValue] = useState("");
  const [PWRegisterValue, setPWRegisterValue] = useState("");
  const [PWConfirmValue, setPWConfirmValue] = useState("");
  const [nameValue, setNameValue] = useState("");

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
      <SubmitButton status="register" />
    </div>
  );
}
