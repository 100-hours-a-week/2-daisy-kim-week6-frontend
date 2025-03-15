import React from 'react';
import * as S from './inputStyle';

export default function CommentInput() {
  return (
    <S.CommentInputWrapper>
      <S.CommentInputContainer>
        <S.Input placeholder="댓글을 남겨주세요!" />
      </S.CommentInputContainer>
      <S.CommentButton>댓글 등록</S.CommentButton>
    </S.CommentInputWrapper>
  );
}
