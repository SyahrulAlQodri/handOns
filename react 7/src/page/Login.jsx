import { useState } from "react";
import Navbar from "../componen/Navbar";
import axios from "axios";

const Login = () => {
    const [userName, setUserName] = useState ("")
    const [password, setPassword] = useState ("")
    const [token, setToken] = useState ("")

    const handleChangeUserName = (event) => {
        console.log(event);
        setUserName(event, target, value)
    };

    const handleChangePassword = (event) => {
        console.log(event);
        setPassword(event, target, value)
    };
    const handleLogin = async () => {
        const payLoad = {
        userName: userName,
        password: password,
    }
    
     try {
        const response = await axios.post(
            "https://api.mudoapi.tech/login",
            payLoad
        );

        const token = response.data.data.token
        setToken(token);

        localStorage.setItem("access_token", token);

     } catch (error) {
        console.log(error.response);

        const errorMessage = error.response.data.message;
        setError(errorMessage);
     }
    } 
    return (
        <div className="login">
            <h1>login</h1>
            <Navbar/>
            {token && <h1>Login Berhasil</h1>}
            {errorLogin && <h1>{errorLogin}</h1>}
            <div className="login layout">
                <input onChange={handleChangeUserName} placeholder="masukan username" />
                <input onChange={handleChangePassword} placeholder="masukan password" />
                <button onClick={handleLogin}>login</button>
            </div>
        </div>
    )
} 

export default Login;