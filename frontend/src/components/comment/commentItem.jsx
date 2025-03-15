import React from 'react';
import * as S from './commentItemStyle';
import EditDelete from '../button/EditDelete';
import UserInfo from '../board/userInfo';

export default function CommentItem({ item }) {
  return (
    <S.CommentItem key={item.id}>
      <S.CommentLeft>
        <UserInfo object={item} />
        <S.CommentContent>{item.content}</S.CommentContent>
      </S.CommentLeft>
      {item.myComment ? <EditDelete /> : null}
    </S.CommentItem>
  );
}
