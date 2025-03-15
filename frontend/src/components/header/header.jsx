import React, { useState } from 'react';
import * as S from './headerStyle';
import { useNavigate } from 'react-router-dom';
import Toggle from './toggle';

export default function Header({ back, myPage }) {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  function openToggle() {
    setOpen(!open);
  }
  return (
    <S.Wrapper>
      <S.Container>
        {back ? <S.Back onClick={() => nav(-1)} /> : <S.Blank></S.Blank>}
        <S.Title>아무말 대잔치</S.Title>
        {myPage ? (
          <S.MyPage onClick={openToggle}></S.MyPage>
        ) : (
          <S.Blank></S.Blank>
        )}
      </S.Container>
      {open ? <Toggle /> : null}
    </S.Wrapper>
  );
}
