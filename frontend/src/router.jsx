import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <Signup />,
  },
]);

export default router;
