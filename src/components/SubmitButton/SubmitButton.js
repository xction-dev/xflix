import "./SubmitButton.css";

export default function SubmitButton({ onClick, status }) {
  const handleRegister = () => {
    onClick();
  };

  return (
    <button onClick={handleRegister} className="submit-btn">
      {status === "submit" ? "확인" : "가입"}
    </button>
  );
}
