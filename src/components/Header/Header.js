import styles from './Header.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div className="header-container">
            <Link href="/dashboard" style={{ textDecoration: "none", color: "blue"}}>
                <div className="logo">XFLIX</div>
            </Link>
            <Link href="/login">
                <button className="login-btn">로그인</button>
            </Link>
        </div>
    )
}