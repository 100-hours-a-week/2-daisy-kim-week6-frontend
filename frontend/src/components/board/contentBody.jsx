import React, { useEffect, useState } from 'react';
import * as S from './style/contentBodyStyle';
import api from '../../utils/axios';

export default function ContentBody({ board, id }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(board.likeCount);
    setIsLiked(board.like);
  }, [board]);

  async function fetchLike() {
    let newIsLiked = !isLiked;
    try {
      if (!isLiked) {
        const response = await api.post(`/board/${id}/like`);
        setLikes(response.data.likeCount);
        setIsLiked(newIsLiked);
        console.log(response.data);
      } else {
        const response = await api.delete(`/board/${id}/like-delete`);
        console.log(response.data);
        setLikes(response.data.likeCount);
        setIsLiked(newIsLiked);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <S.ContentBodyWrapper>
      <S.ContentImg src={board.boardImageUrl} />
      <S.ContentText>{board.content}</S.ContentText>
      <S.CountInfoWrapper>
        <S.LikeButton onClick={fetchLike} isLiked={isLiked}>
          {likes} <br />
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
