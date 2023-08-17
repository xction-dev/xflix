'use client';

import styles from './IDInput.css'
import React, { useState } from 'react'

export default function IDInput() {
    const [ inputValue, setInputValue ] = useState('')

    const handleInputChange = ((event) => {
        setInputValue(event.target.value);
    })


    return (
        <div>
            <h5 className="id-txt">ID</h5>
            <input className="id-input" type="text" placeholder="sample@sample.com" value={inputValue} onChange={handleInputChange}/>
        </div>
    )
}