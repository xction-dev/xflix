'use client';

import IDInput from '../IDInput/IDInput'
import PWInput from '../PWInput/PWInput'
import SubmitButton from '../../SubmitButton/SubmitButton'
import styles from './LoginContainer.css'

import React, { useState } from 'react'

export default function LoginContainer() {
    const [ IDInputValue, setIDInputValue ] = useState('')
    const [ PWInputValue, setPWInputValue ] = useState('')

    console.log(IDInputValue)
    console.log(PWInputValue)

    return (
        <div className="login-container">
            <h2 className="login-txt">로그인</h2>
            <IDInput inputValue={IDInputValue} setInputValue={setIDInputValue}/>
            <PWInput inputValue={PWInputValue} setInputValue={setPWInputValue}/>
            <SubmitButton />
        </div>
    )
}