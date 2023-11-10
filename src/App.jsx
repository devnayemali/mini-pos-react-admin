import { RouterProvider } from 'react-router-dom';
import './assets/css/sb-admin-2.min.css';
import './assets/css/style.css';
import Router from './components/router/Router';
import { useEffect, useState } from 'react';
import PublicRouter from './components/router/PublicRouter';
import './axiosConfig';
import axios from 'axios';
import GlobalFunction from './Utility/GlobalFunction';

function App() {

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      setAuth(true);
    }

    // Set up Axios request interceptors
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        // Attach the authentication token to the request headers if present
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
          config.headers['Authorization'] = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => {
        // Handle request errors
        return Promise.reject(error);
      }
    );

    // Set up Axios response interceptors
    const responseInterceptor = axios.interceptors.response.use(
      (response) => {
        // Handle successful responses
        return response;
      },
      (error) => {
        // Handle response errors
        if (error.response.status === 401) {
          console.log('Unauthorized access. Redirect to login page.');
          GlobalFunction.logout();
        } else if (error.response.status === 500) {
          window.location.href = window.location.origin + '/error-500';
        }
        return Promise.reject(error);
      }
    );

    // Clean up interceptors when the component unmounts
    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return (
    <>
      {auth ?
        <RouterProvider router={Router}></RouterProvider>
        :
        <RouterProvider router={PublicRouter}></RouterProvider>}
    </>
  )
}

export default App
