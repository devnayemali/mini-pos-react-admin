import { useState } from "react";

const Login = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <section className="d-flex align-items-center vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5">
                        <div className="form-wrap">
                            <h2 className="mb-4">Sign in your account</h2>
                            <form>
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