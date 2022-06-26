import { useState } from "react";
//import { instance } from "../utils.js";
import axios from "axios";

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [t, setT] = useState('');
    const handleSubmitSignUp = async function (e) {
        e.preventDefault();
        const res = await axios.post("http://127.0.0.1:5000/api/users", { username, password });
        if (res.status === 201) {
            setT('đăng kí thành công');
        } else {
            setT('đăng kí thất bại');
        }
    };
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
            <div className="form-group">
                <p>{t}</p>
            </div>
            <button type="submit" className="btn btn-primary" onClick={handleSubmitSignUp}>SignUp</button>
        </form>
    );
}

export default Signup;