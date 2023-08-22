import './IDInput.css'

export default function IDInput({ inputValue, setInputValue }) {
    return (
        <div>
            <h5 className="id-txt">ID</h5>
            <input className="id-input" type="text" placeholder="sample@sample.com" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
        </div>
    )
}