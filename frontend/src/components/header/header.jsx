import React from 'react';
import * as S from './headerStyle';
import { useNavigate } from 'react-router-dom';

export default function Header({ back, myPage }) {
  const nav = useNavigate();
  return (
    <S.Wrapper>
      <S.Container>
        {back ? <S.Back onClick={() => nav(-1)} /> : <S.Blank></S.Blank>}
        <S.Title>아무말 대잔치</S.Title>
        {myPage ? <S.MyPage>토글</S.MyPage> : <S.Blank></S.Blank>}
      </S.Container>
    </S.Wrapper>
  );
}
