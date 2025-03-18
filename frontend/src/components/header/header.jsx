import React, { useEffect, useState } from 'react';
import * as S from './headerStyle';
import { useNavigate } from 'react-router-dom';
import Toggle from './toggle';
import GetUserInfo from '../../utils/api/getUserInfo';

export default function Header({ back, myPage, newProfile }) {
  const nav = useNavigate();
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  function openToggle() {
    setOpen(!open);
  }

  const { data, fetchUserInfo } = GetUserInfo();

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    if (newProfile) {
      setImageUrl(newProfile);
    } else {
      setImageUrl(`http://localhost:8080${data.imageUrl}`);
    }
  }, [newProfile, data]);

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
