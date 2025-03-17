import React from 'react';
import * as S from './style/commentItemStyle';
import EditDelete from '../button/EditDelete';
import UserInfo from '../board/userInfo';

export default function CommentItem({ item, editFunction, deleteFunction }) {
  return (
    <S.CommentItem key={item.id}>
      <S.CommentLeft>
        <UserInfo object={item} />
        <S.CommentContent>{item.content}</S.CommentContent>
      </S.CommentLeft>
      {item.myComment ? (
        <EditDelete
          editFunction={editFunction}
          deleteFunction={deleteFunction}
        />
      ) : null}
    </S.CommentItem>
  );
}
