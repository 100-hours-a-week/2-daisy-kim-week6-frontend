import React from 'react';
import * as S from './PopupStyle';

export default function Popup({ title, content, okFunction, cancelFunction }) {
  return (
    <S.Background>
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.Content>{content}</S.Content>
        <S.Buttons>
          <S.Cancel onClick={cancelFunction}>취소</S.Cancel>
          <S.Ok onClick={okFunction}>확인</S.Ok>
        </S.Buttons>
      </S.Container>
    </S.Background>
  );
}
