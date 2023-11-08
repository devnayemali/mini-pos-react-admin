import { RouterProvider } from 'react-router-dom';
import './assets/css/sb-admin-2.min.css';
import './assets/css/style.css';
import Router from './components/router/Router';
import { useState } from 'react';
import PublicRouter from './components/router/PublicRouter';

function App() {

  const [auth, setAuth] = useState(false);

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
