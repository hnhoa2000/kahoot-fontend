import { useState } from "react";
//import { instance } from "../utils.js";
import axios from "axios";

function Signin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitSignIn = async function (e) {
        e.preventDefault();
        const res = await axios.post("http://127.0.0.1:5000/api/auth", { username, password });
        console.log(res);
        localStorage.setItem('kahoot-accessToken', res.data.accessToken);
        localStorage.setItem('kahoot-refreshToken', res.data.refreshToken);
    }
    return (
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Username</label>
                <input type="text" className="form-control" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmitSignIn}>SignIn</button>
        </form>
    );
}

export default Signin;