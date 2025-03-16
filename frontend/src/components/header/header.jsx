import React, { useEffect, useState } from 'react';
import * as S from './headerStyle';
import { useNavigate } from 'react-router-dom';
import Toggle from './toggle';
import api from '../../utils/axios';

export default function Header({ back, myPage }) {
  const nav = useNavigate();
  const [imageUrl, setImageUrl] = useState('');
  const [open, setOpen] = useState(false);
  function openToggle() {
    setOpen(!open);
  }

  const fetchUserImg = async () => {
    try {
      const response = await api.get('/user');
      setImageUrl(response.data.imageUrl);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchUserImg();
  }, []);
  return (
    <S.Wrapper>
      <S.Container>
        {back ? <S.Back onClick={() => nav(-1)} /> : <S.Blank></S.Blank>}
        <S.Title>아무말 대잔치</S.Title>
        {myPage ? (
          <S.MyPage onClick={openToggle} src={imageUrl} />
        ) : (
          <S.Blank></S.Blank>
        )}
      </S.Container>
      {open ? <Toggle /> : null}
    </S.Wrapper>
  );
}
