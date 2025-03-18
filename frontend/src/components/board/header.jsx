import React from 'react';
import * as S from './style/headerStyle';
import EditDelete from '../button/EditDelete';
import UserInfo from './userInfo';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../utils/axios';

export default function BoardDetailHeader({ board }) {
  const nav = useNavigate();
  const id = useParams().boardId;

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
          <EditDelete editFunction={editButton} deleteFunction={deleteButton} />
        ) : null}
      </S.HeaderBottom>
    </S.HeaderWrapper>
  );
}
