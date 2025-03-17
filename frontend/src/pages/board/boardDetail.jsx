import React, { useEffect, useState } from 'react';
import * as S from './style/boardDetailStyle';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import BoardDetailHeader from '../../components/board/header';
import ContentBody from '../../components/board/contentBody';
import CommentInput from '../../components/comment/input';
import CommentItem from '../../components/comment/commentItem';
import fetchBoard from '../../utils/api/getBoardInfo';
import fetchComments from '../../utils/api/getComments';

export default function BoardDetail() {
  const nav = useNavigate();

  const id = useParams().boardId;
  const [comments, setComments] = useState([]);
  const [boardData, setBoardData] = useState('');

  useEffect(() => {
    fetchComments(id, setComments);
    fetchBoard(setBoardData, id, nav);
  }, [id, nav]);

  return (
    <S.Wrapper>
      <Header back={true} myPage={true} />
      <S.ContentWrapper>
        <BoardDetailHeader board={boardData} />
        <ContentBody board={boardData} id={id} />
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
