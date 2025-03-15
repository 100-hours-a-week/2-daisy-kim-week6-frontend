import React, { useEffect, useState } from 'react';
import * as S from './style/boardListStyle';
import Header from '../../components/header/header';
import api from '../../axios';
import BoardItem from '../../components/board/boardItemBox';

export default function BoardList() {
  const [boards, setBoards] = useState([]);
  const fetchData = async () => {
    try {
      const response = await api.get('/board');
      setBoards(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <S.Wrapper>
      <Header back={false} myPage={true} />
      <S.Title>
        안녕하세요,
        <br />
        아무 말 대잔치 <b>게시판</b>입니다.
      </S.Title>
      <S.BodyWrapper>
        <S.PostButton>게시글 작성</S.PostButton>
        <S.ListWrapper>
          {boards.map((board) => (
            <BoardItem key={board.boardId} board={board} />
          ))}
        </S.ListWrapper>
      </S.BodyWrapper>
    </S.Wrapper>
  );
}
