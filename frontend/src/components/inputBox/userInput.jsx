import React from 'react';
import * as S from './userInputStyle';

export default function Input({ title, placeholder, noInput, isPw }) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {!noInput ? (
        <>
          {isPw ? (
            <S.Input type="password" placeholder={placeholder} />
          ) : (
            <S.Input type="text" placeholder={placeholder} />
          )}
          <S.Helper>helper text</S.Helper>
        </>
      ) : (
        <S.NoInputText>api로 이메일 들어갈 곳</S.NoInputText>
      )}
    </S.Container>
  );
}
