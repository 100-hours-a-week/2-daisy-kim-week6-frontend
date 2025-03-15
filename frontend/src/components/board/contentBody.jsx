import React from 'react';
import * as S from './style/contentBodyStyle';

export default function ContentBody() {
  return (
    <S.ContentBodyWrapper>
      <S.ContentImg></S.ContentImg>
      <S.ContentText>본문 내용</S.ContentText>
      <S.CountInfoWrapper>
        <S.LikeButton>
          0 <br />
          좋아요수
        </S.LikeButton>
        <S.CountInfo>
          0 <br />
          조회수
        </S.CountInfo>
        <S.CountInfo>
          0 <br />
          댓글
        </S.CountInfo>
      </S.CountInfoWrapper>
    </S.ContentBodyWrapper>
  );
}
