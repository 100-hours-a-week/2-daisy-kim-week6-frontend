import React from 'react';
import * as S from './userInputStyle';

export default function Input({
  title,
  placeholder,
  noInput,
  isPw,
  func,
  helper,
}) {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {!noInput ? (
        <>
          {isPw ? (
            <S.Input
              type="password"
              placeholder={placeholder}
              onChange={func}
            />
          ) : (
            <S.Input type="text" placeholder={placeholder} onChange={func} />
          )}
          <S.Helper>{helper}</S.Helper>
        </>
      ) : (
        <S.NoInputText>api로 이메일 들어갈 곳</S.NoInputText>
      )}
    </S.Container>
  );
}
