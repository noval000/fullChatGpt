import React, {useState} from 'react';
import CheckLogin from "../checkLogin/checkLogin";

const Login = (props) => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [loginOk, setLogin] = useState(false);


    return (
        <div>
            <CheckLogin
                userName={userName}
                setUserName={setUserName}
                password={password}
                setPassword={setPassword}
                loginOk={loginOk}
                setLogin={setLogin}
            />
        </div>
    )
}

export default Login;