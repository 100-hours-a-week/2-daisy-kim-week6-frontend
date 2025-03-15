import React from 'react';
import * as S from './EditDeleteStyle';
import { useNavigate } from 'react-router-dom';

export default function EditDelete({ link }) {
  const nav = useNavigate();
  return (
    <S.ButtonWrapper>
      <S.Button>수정</S.Button>
      <S.Button onClick={() => nav(link)}>삭제</S.Button>
    </S.ButtonWrapper>
  );
}
