import React from 'react';
import * as S from './style/boardItemBoxStyle';
import { useNavigate } from 'react-router-dom';

export default function BoardItem({ board }) {
  const nav = useNavigate();

  const formatDate = (time) => {
    return new Date(time).toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <S.ItemWrapper key={board.id} onClick={() => nav(`${board.id}`)}>
      <S.ItemTop>
        <S.ItemTitle>{board.title}</S.ItemTitle>
        <S.ItemInfo>
          <S.ItemCountWrapper>
            <S.ItemCount>좋아요 {board.likeCount}</S.ItemCount>
            <S.ItemCount>댓글 {board.commentCount}</S.ItemCount>
            <S.ItemCount>조회수 {board.viewCount}</S.ItemCount>
          </S.ItemCountWrapper>
          <S.ItemDate>{formatDate(board.createdAt)}</S.ItemDate>
        </S.ItemInfo>
      </S.ItemTop>
      <S.ItemBottom>
        <S.ItemUserImg src={board.userProfileImageUrl} />
        <S.ItemUserName>{board.userName}</S.ItemUserName>
      </S.ItemBottom>
    </S.ItemWrapper>
  );
}
