"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState("waiting for fetch");
  useEffect(() => {
    fetch("/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        username: "test02",
        password: "password02",
      }),
    })
      .then((res) => res.json())
      .then((data) => setAnswer(JSON.stringify(data)));
  }, []);
  return <>{answer}</>;
}
