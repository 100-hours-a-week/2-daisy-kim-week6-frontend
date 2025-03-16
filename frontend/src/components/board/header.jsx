import React from 'react';
import * as S from './style/headerStyle';
import EditDelete from '../button/EditDelete';
import UserInfo from './userInfo';

export default function BoardDetailHeader({ board }) {
  return (
    <S.HeaderWrapper>
      <S.Title>{board.title}</S.Title>
      <S.HeaderBottom>
        <UserInfo object={board} />
        {board.myBoard ? <EditDelete link="/board" /> : null}
      </S.HeaderBottom>
    </S.HeaderWrapper>
  );
}
