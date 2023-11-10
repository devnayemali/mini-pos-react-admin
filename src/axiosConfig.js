import axios from "axios";

const axiosConfig = () => {
    // Add a request interceptor
    axios.interceptors.request.use(function (config) {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            config.headers['Authorization'] = `Bearer ${authToken}`;
        }
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        const errStatus = error.response.status;
        if (errStatus === 401) {
            console.log('Unauthorized access. Redirect to login page.');
            console.log('workding');
        } else if (errStatus === 500) {
            window.location.href = window.location.origin + '/error-500';
        }
        return Promise.reject(error);
    });
};



export default axiosConfig;