import React from 'react';
import * as S from './style/headerStyle';
import EditDelete from '../button/EditDelete';
import UserInfo from './userInfo';

export default function BoardDetailHeader() {
  return (
    <S.HeaderWrapper>
      <S.Title>제목1</S.Title>
      <S.HeaderBottom>
        <UserInfo />
        <EditDelete link="/board" />
      </S.HeaderBottom>
    </S.HeaderWrapper>
  );
}
