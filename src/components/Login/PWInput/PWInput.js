'use client';

import styles from './PWInput.css'
import React, { useState } from 'react'

export default function PWInput() {
    const [ inputValue, setInputValue ] = useState('')

    const handleInputChange = ((event) => {
        setInputValue(event.target.value);
    })

    return (
        <div>
            <h5 className="pw-txt">비밀번호</h5>
            <input className="pw-input" type="password" value={inputValue} onChange={handleInputChange}/>
        </div>
    )
}