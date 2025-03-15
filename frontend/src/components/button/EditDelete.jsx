import React from 'react';
import * as S from './EditDeleteStyle';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditDelete({ link }) {
  const nav = useNavigate();
  const id = useParams().boardId;
  return (
    <S.ButtonWrapper>
      <S.Button onClick={() => nav(`post`)}>수정</S.Button>
      <S.Button onClick={() => nav(link)}>삭제</S.Button>
    </S.ButtonWrapper>
  );
}
