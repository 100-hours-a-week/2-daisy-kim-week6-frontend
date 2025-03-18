import React from 'react';
import * as S from './style/userInfoStyle';
import formatDate from '../../utils/validation/formatDate';

export default function UserInfo({ object }) {
  return (
    <S.UserInfo>
      <S.UserImg src={`http://localhost:8080${object.userImageUrl}`} />
      <S.UserName>{object.userName}</S.UserName>
      <S.Date>{formatDate(object.createdAt)}</S.Date>
    </S.UserInfo>
  );
}
