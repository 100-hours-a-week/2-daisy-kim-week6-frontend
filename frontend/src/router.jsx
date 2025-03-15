import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';
import BoardList from './pages/board/boardList';
import BoardDetail from './pages/board/boardDetail';

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
    path: '/board',
    element: <BoardList />,
  },
  {
    path: '/board/:boardId',
    element: <BoardDetail />,
  },
]);

export default router;
