import { createBrowserRouter } from 'react-router-dom';
import AuthLayout from '../layout/AuthLayout';
import Login from '../modules/Login';

const PublicRouter = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/',
                element: <Login></Login>
            }
        ]
    }
]);

export default PublicRouter;