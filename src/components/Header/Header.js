import styles from './Header.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="header-container">
            <Link href="/dashboard" className="logo">XFLIX</Link>
            <Link href="/login" className="login-btn">로그인</Link>
        </div>
    )
}