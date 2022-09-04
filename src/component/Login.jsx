import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/Myinput";
import {useContext} from "react";
import {AuthContext} from "../context";
import "../style/Pages/Login.scss"

const Login = () => {

    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <div className="Login__container">
                <h1 className="Login__title">Press Enter to unlock all pages</h1>
                <form onSubmit={login}>
                    <MyInput type="text" placeholder="lead login"/>
                    <MyInput type="password" placeholder="lead password"/>
                    <MyButton>Enter</MyButton>
                </form>
            </div>
        </div>
    )
}

export default Login;