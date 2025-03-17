import React, { useEffect, useState } from 'react';
import * as S from './style/boardDetailStyle';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import BoardDetailHeader from '../../components/board/header';
import ContentBody from '../../components/board/contentBody';
import CommentInput from '../../components/comment/input';
import CommentItem from '../../components/comment/commentItem';
import fetchComments from '../../utils/api/getComments';
import BoardInfo from '../../utils/api/getBoardInfo';

export default function BoardDetail() {
  const id = useParams().boardId;
  const [comments, setComments] = useState([]);
  const { data, fetchBoard } = BoardInfo();

  useEffect(() => {
    fetchComments(id, setComments);
    fetchBoard();
  }, [id]);

  return (
    <S.Wrapper>
      <Header back={true} myPage={true} />
      <S.ContentWrapper>
        <BoardDetailHeader board={data} />
        <ContentBody board={data} id={data.id} />
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
