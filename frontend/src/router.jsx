import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';
import BoardList from './pages/board/boardList';
import BoardDetail from './pages/board/boardDetail';
import BoardPost from './pages/board/boardPost';

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
  {
    path: '/board/post',
    element: <BoardPost />,
  },
  {
    path: '/board/:boardId/post',
    element: <BoardPost />,
  },
]);

export default router;
