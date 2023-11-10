import { RouterProvider } from 'react-router-dom';
import './assets/css/sb-admin-2.min.css';
import './assets/css/style.css';
import Router from './components/router/Router';
import { useEffect, useState } from 'react';
import PublicRouter from './components/router/PublicRouter';
import axios from 'axios';

function App() {

  const [auth, setAuth] = useState(false);

  // Load user data from localStorage when component mounts
  const token = localStorage.getItem('authToken');
  useEffect(() => {
    if (token) {
      setAuth(true);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, [token]);

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
