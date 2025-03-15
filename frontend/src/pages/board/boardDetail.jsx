import React, { useEffect, useState } from 'react';
import * as S from './style/boardDetailStyle';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import BoardDetailHeader from '../../components/board/header';
import ContentBody from '../../components/board/contentBody';
import CommentInput from '../../components/comment/input';
import api from '../../axios';
import CommentItem from '../../components/comment/commentItem';

export default function BoardDetail() {
  const id = useParams().boardId;
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await api.get(`/board/${id}/comment`);
      setComments(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <S.Wrapper>
      <Header back={true} myPage={true} />
      <S.ContentWrapper>
        <BoardDetailHeader />
        <ContentBody />
      </S.ContentWrapper>
      <S.CommentWrapper>
        <CommentInput />
        <S.CommentList>
          {comments.map((comment) => (
            <CommentItem item={comment} key={comment.id} />
          ))}
        </S.CommentList>
      </S.CommentWrapper>
    </S.Wrapper>
  );
}
