import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";



const Login = () => {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();


    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);
        axios.post('http://127.0.0.1:8000/api/login', formData)
            .then(function (res) {
                const token = res.data.token;
                localStorage.setItem('userData', JSON.stringify(res.data));
                localStorage.setItem('authToken', token);
                window.location.reload();
            }).catch(function (errors) {
                console.log(errors);
                if (errors.response.status === 422) {
                    setErrors(errors.response.data.errors);
                }
            }).finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token){
            navigate('/'); 
        }
    } , [navigate]);

    return (
        <section className="d-flex align-items-center vh-100">
            <ToastContainer />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5">
                        <div className="form-wrap">
                            <h2 className="mb-4">Sign in your account</h2>
                            <form onSubmit={handleLogin}>
                            {errors.error && <span className="error-message text-danger">{errors.error}</span>}
                                <div className="input-box">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        onChange={handleInputChange}
                                        name="email"
                                        value={formData.email}
                                        id="email"
                                    />
                                    {errors.email && <span className="error-message text-danger">{errors.email}</span>}
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
                                    {errors.password && <span className="error-message text-danger">{errors.password[0]}</span>}
                                </div>
                                <div className="input-button mt-4">
                                    <button disabled={isLoading} className="btn btn-info w-100" type="submit">
                                    {isLoading ? <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>:'Login'}</button>
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