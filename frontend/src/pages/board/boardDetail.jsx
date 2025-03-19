import React, { useEffect } from 'react';
import * as S from './style/boardDetailStyle';
import Header from '../../components/header/header';
import BoardDetailHeader from '../../components/board/header';
import ContentBody from '../../components/board/contentBody';
import BoardInfo from '../../utils/api/getBoardInfo';
import CommentContainer from '../../components/comment/commentContainer';

export default function BoardDetail() {
  const { data, fetchBoard } = BoardInfo();

  useEffect(() => {
    fetchBoard();
  }, [fetchBoard]);

  return (
    <S.Wrapper>
      <Header back={true} myPage={true} />
      <S.ContentWrapper>
        <BoardDetailHeader board={data} />
        <ContentBody board={data} id={data.id} />
      </S.ContentWrapper>
      <CommentContainer />
    </S.Wrapper>
  );
}
