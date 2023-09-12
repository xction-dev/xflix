import "./SubmitButton.css";

export default function SubmitButton({ onClick, status }) {
  const handleRegister = () => {
    onClick();
  };

  const handleLogin = () => {
    onClick();
  };

  return (
    // status를 login과 register로 나눠 onClick 기능과 버튼 레이블을 조건부 렌더링
    <button
      onClick={status === "login" ? handleLogin : handleRegister}
      className="submit-btn"
    >
      {status === "login" ? "확인" : "가입"}
    </button>
  );
}
