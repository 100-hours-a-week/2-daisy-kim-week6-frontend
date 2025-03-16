import React from 'react';
import * as S from './style/contentBodyStyle';

export default function ContentBody({ board }) {
  return (
    <S.ContentBodyWrapper>
      <S.ContentImg src={board.boardImageUrl} />
      <S.ContentText>{board.content}</S.ContentText>
      <S.CountInfoWrapper>
        <S.LikeButton>
          {board.likeCount} <br />
          좋아요수
        </S.LikeButton>
        <S.CountInfo>
          {board.viewCount} <br />
          조회수
        </S.CountInfo>
        <S.CountInfo>
          {board.commentCount} <br />
          댓글
        </S.CountInfo>
      </S.CountInfoWrapper>
    </S.ContentBodyWrapper>
  );
}
