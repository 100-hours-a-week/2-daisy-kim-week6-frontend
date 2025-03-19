import React, { useState } from 'react';
import * as S from './style/commentItemStyle';
import EditDelete from '../button/EditDelete';
import UserInfo from '../board/userInfo';
import Popup from '../popup/Popup';

export default function CommentItem({ item, editFunction, deleteFunction }) {
  const [show, setShow] = useState(false);

  return (
    <S.CommentItem key={item.id}>
      <S.CommentLeft>
        <UserInfo object={item} />
        <S.CommentContent>{item.content}</S.CommentContent>
      </S.CommentLeft>
      {item.myComment ? (
        <EditDelete
          editFunction={editFunction}
          deleteFunction={() => setShow(true)}
        />
      ) : null}
      {show ? (
        <Popup
          title="댓글을 삭제하시겠습니까?"
          content="삭제한 내용은 복구 할 수 없습니다."
          cancelFunction={() => setShow(false)}
          okFunction={deleteFunction}
        />
      ) : null}
    </S.CommentItem>
  );
}
