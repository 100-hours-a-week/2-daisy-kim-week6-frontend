import React from 'react';
import * as S from './submitButtonStyle';

export default function SubmitButton({ func, text, isDisable }) {
  return (
    <S.SubmitEdit
      onClick={isDisable ? undefined : func}
      $isDisabled={isDisable}
    >
      {text}
    </S.SubmitEdit>
  );
}
