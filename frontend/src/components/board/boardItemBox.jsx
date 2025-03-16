import React from 'react';
import * as S from './style/boardItemBoxStyle';
import { useNavigate } from 'react-router-dom';
import formatDate from '../../utils/formatDate';

export default function BoardItem({ board }) {
  const nav = useNavigate();

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
