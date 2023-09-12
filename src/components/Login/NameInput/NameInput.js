import "./NameInput.css";

export default function NameInput({ inputValue, setInputValue }) {
  return (
    <div>
      <h5 className="name-txt">이름</h5>
      <input
        className="name-input"
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
    </div>
  );
}
