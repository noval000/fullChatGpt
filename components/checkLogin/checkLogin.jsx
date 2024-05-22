import React from 'react';
import Home from "../home/home";

const CheckLogin = (props) => {
    return (
        <div>
            {
                !props.loginOk &&
                <form className="loginForm">
                    <input type="text" name="username" placeholder="Username" id="username" required
                           value={props.userName}
                           onChange={(e) => {
                               props.setUserName(e.target.value)
                               console.log(props.userName)
                           }}
                    ></input>
                    <input type="password" name="password" placeholder="Password" id="password" required
                           value={props.password}
                           onChange={(e) => {
                               props.setPassword(e.target.value)
                           }}
                    ></input>
                    <input type="submit" value="Login"
                           onClick={(e) => {
                               const form = e.target.closest('.loginForm');
                               form.addEventListener('submit' , e => {
                                   e.preventDefault();
                               })
                               if (props.userName === 'admin' && props.password === '1') {
                                   console.log('ok')
                                   props.setLogin(!props.loginOk)
                               }
                           }}
                    ></input>
                </form>
            }
            {
                props.loginOk &&
                <Home/>
            }
        </div>
    );
};

export default CheckLogin;