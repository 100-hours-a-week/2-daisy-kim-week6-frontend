import React from 'react';
import * as S from './userInputStyle';

export default function Input({ title, placeholder }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Input type="text" placeholder={placeholder} />
      <S.Helper>helper text</S.Helper>
    </S.Container>
  );
}
