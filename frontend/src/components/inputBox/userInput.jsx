import React from 'react';
import * as S from './userInputStyle';

export default function Input({
  title,
  placeholder,
  noInput,
  isPw,
  func,
  helper,
  value,
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
            <S.Input
              type="text"
              placeholder={placeholder}
              onChange={func}
              value={value}
            />
          )}
          <S.Helper>{helper}</S.Helper>
        </>
      ) : (
        <S.NoInputText>{value}</S.NoInputText>
      )}
    </S.Container>
  );
}
