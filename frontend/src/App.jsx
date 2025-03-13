import React from 'react';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <header>아무말 대잔치</header>
      <div>
        본문입니다.
        <Outlet />
      </div>
      <footer>바닥입니다.</footer>
    </div>
  );
}
