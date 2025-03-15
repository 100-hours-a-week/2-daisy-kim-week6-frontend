import React from 'react';
import * as S from './submitButtonStyle';

export default function SubmitButton({ func, text }) {
  return <S.SubmitEdit onClick={func}>{text}</S.SubmitEdit>;
}
