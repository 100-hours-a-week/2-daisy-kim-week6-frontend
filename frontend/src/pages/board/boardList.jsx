import React from 'react';
import * as S from './style/boardListStyle';
import Header from '../../components/header/header';
import api from '../../axios';

export default function BoardList() {
  const fetchData = async () => {
    try {
      const response = await api.get('/board');
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  fetchData();
  return (
    <S.Wrapper>
      <Header back={false} myPage={true} />
      <S.Title>
        안녕하세요,
        <br />
        아무 말 대잔치 <b>게시판</b>입니다.
      </S.Title>
    </S.Wrapper>
  );
}
