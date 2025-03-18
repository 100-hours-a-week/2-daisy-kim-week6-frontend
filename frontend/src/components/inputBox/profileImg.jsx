import React from 'react';
import * as S from './userInputStyle';

export default function ProfileInput({ title, func, helper, imageUrl }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Helper>{helper}</S.Helper>
      <S.ImgInputWrapper>
        <S.ImgInput type="file" id="img-input" onChange={func} />
        {imageUrl ? (
          <>
            <S.CumstomLabel htmlFor="img-input"></S.CumstomLabel>
            <S.RealImg src={imageUrl} alt="" />
          </>
        ) : (
          <S.CumstomLabel htmlFor="img-input">+</S.CumstomLabel>
        )}
      </S.ImgInputWrapper>
    </S.Container>
  );
}
