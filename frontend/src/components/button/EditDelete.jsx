import React from 'react';
import * as S from './EditDeleteStyle';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditDelete({ link, editFunction, deleteFunction }) {
  const nav = useNavigate();
  const id = useParams().boardId;
  return (
    <S.ButtonWrapper>
      <S.Button onClick={editFunction}>수정</S.Button>
      <S.Button onClick={deleteFunction}>삭제</S.Button>
    </S.ButtonWrapper>
  );
}
