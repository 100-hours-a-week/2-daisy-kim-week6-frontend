import React from 'react';
import * as S from './userInputStyle';

export default function ProfileInput({ title }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Helper>helper text</S.Helper>
      <S.ImgInput>+</S.ImgInput>
    </S.Container>
  );
}
