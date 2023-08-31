import "./SubmitButton.css";
import Link from "next/link";

export default function SubmitButton(status) {
  return (
    <Link href="/dashboard" className="submit-btn">
      {status === "submit" ? "확인" : "가입"}
    </Link>
  );
}
