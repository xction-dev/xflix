import "./PWInput.css";

export default function PWInput({ status, inputValue, setInputValue }) {
  return (
    <div>
      <h5 className="pw-txt">
        {status === "original" ? "비밀번호" : "비밀번호 확인"}
      </h5>
      <input
        className="pw-input"
        type="password"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
}
