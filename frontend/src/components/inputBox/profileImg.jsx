import React from 'react';
import * as S from './userInputStyle';

export default function ProfileInput({ title }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Helper>helper text</S.Helper>
      <S.ImgInputWrapper>
        <S.ImgInput type="file" id="img-input" />
        <S.CumstomLabel htmlFor="img-input">
          <S.Plus>+</S.Plus>
        </S.CumstomLabel>
        <S.RealImg id="profile-preview" src="" alt="프로필 이미지" />
      </S.ImgInputWrapper>
    </S.Container>
  );
}
