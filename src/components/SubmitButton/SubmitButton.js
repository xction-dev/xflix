import styles from './SubmitButton.css'
import Link from 'next/link'

export default function SubmitButton() {

    return (
        <Link href='/dashboard'>
            <button className="submit-btn">확인</button>
        </Link>
    )
}