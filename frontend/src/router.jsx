import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/user/Login';
import Signup from './pages/user/Signup';
import BoardList from './pages/board/boardList';
import BoardDetail from './pages/board/boardDetail';
import BoardPost from './pages/board/boardPost';
import InfoEdit from './pages/user/infoEdit';
import PwEdit from './pages/user/pwEdit';

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
  {
    path: '/user/edit',
    element: <InfoEdit />,
  },
  {
    path: '/user/edit/password',
    element: <PwEdit />,
  },
]);

export default router;
