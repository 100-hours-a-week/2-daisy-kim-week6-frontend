import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';
import BoardList from './pages/board/boardList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/boardList',
    element: <BoardList />,
  },
]);

export default router;
