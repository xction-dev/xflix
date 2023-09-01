import "./SubmitButton.css";

export default function SubmitButton({ status }) {
  return (
    <button className="submit-btn">
      {status === "submit" ? "확인" : "가입"}
    </button>
  );
}
