import React from 'react';
import * as S from './style/inputStyle';

export default function CommentInput({
  func,
  isdisabled,
  submit,
  newCommeent,
}) {
  return (
    <S.CommentInputWrapper>
      <S.CommentInputContainer>
        <S.Input
          placeholder="댓글을 남겨주세요!"
          onChange={func}
          value={newCommeent}
        />
      </S.CommentInputContainer>
      <S.CommentButton onClick={submit} $isdisabled={isdisabled}>
        댓글 등록
      </S.CommentButton>
    </S.CommentInputWrapper>
  );
}
