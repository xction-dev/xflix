import IDInput from '../IDInput/IDInput'
import PWInput from '../PWInput/PWInput'
import SubmitButton from '../../SubmitButton/SubmitButton'
import styles from './LoginContainer.css'

export default function LoginContainer() {

    return (
        <div className="login-container">
            <h2 className="login-txt">로그인</h2>
            <IDInput />
            <PWInput />
            <SubmitButton />
        </div>
    )
}