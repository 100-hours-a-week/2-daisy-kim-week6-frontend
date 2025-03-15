import React from 'react';
import * as S from './style/userInfoStyle';

export default function UserInfo({ object }) {
  return (
    <S.UserInfo>
      <S.UserImg></S.UserImg>
      <S.UserName>이름</S.UserName>
      <S.Date>createdAt</S.Date>
    </S.UserInfo>
  );
}
