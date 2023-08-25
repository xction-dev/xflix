import "./SubmitButton.css";
import Link from "next/link";

export default function SubmitButton() {
  return (
    <Link href="/dashboard" className="submit-btn">
      확인
    </Link>
  );
}
