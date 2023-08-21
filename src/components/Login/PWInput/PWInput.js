import styles from './PWInput.css'

export default function PWInput({ inputValue, setInputValue }) {
    return (
        <div>
            <h5 className="pw-txt">비밀번호</h5>
            <input className="pw-input" type="password" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
        </div>
    )
}