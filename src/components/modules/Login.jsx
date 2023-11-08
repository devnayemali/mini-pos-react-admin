import { useState } from "react";
import axios from 'axios';


const Login = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://127.0.0.1:8000/login', formData)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <section className="d-flex align-items-center vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5">
                        <div className="form-wrap">
                            <h2 className="mb-4">Sign in your account</h2>
                            <form onSubmit={handleLogin}>
                                <div className="input-box">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        onChange={handleInputChange}
                                        name="email"
                                        value={formData.email}
                                        id="email"
                                    />
                                </div>
                                <div className="input-box">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        onChange={handleInputChange}
                                        value={formData.password}
                                        name="password"
                                        id="password"
                                    />
                                </div>
                                <div className="input-button mt-4">
                                    <button className="btn btn-info w-100" type="submit">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;