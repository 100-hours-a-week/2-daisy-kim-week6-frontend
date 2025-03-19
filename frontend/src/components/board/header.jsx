import React, { useState } from 'react';
import * as S from './style/headerStyle';
import EditDelete from '../button/EditDelete';
import UserInfo from './userInfo';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../utils/axios';
import Popup from '../popup/Popup';

export default function BoardDetailHeader({ board }) {
  const nav = useNavigate();
  const id = useParams().boardId;
  const [show, setShow] = useState(false);

  function editButton() {
    nav('post');
  }
  async function deleteButton() {
    try {
      await api.delete(`/board/${id}`);
      nav('/board');
    } catch (e) {
      console.log(e.response);
    }
  }
  return (
    <S.HeaderWrapper>
      <S.Title>{board.title}</S.Title>
      <S.HeaderBottom>
        <UserInfo object={board} />
        {board.myBoard ? (
          <EditDelete
            editFunction={editButton}
            deleteFunction={() => setShow(true)}
          />
        ) : null}
      </S.HeaderBottom>
      {show ? (
        <Popup
          title="게시글을 삭제하시겠습니까?"
          content="삭제한 내용은 복구 할 수 없습니다."
          cancelFunction={() => setShow(false)}
          okFunction={deleteButton}
        />
      ) : null}
    </S.HeaderWrapper>
  );
}
