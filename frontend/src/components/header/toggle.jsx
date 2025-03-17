import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './toggleStyle';
import api from '../../utils/axios';

export default function Toggle() {
  const nav = useNavigate();
  async function logout() {
    try {
      await api.post('/user/logout');
    } catch (e) {
      console.log(e.response);
    } finally {
      nav('/');
    }
  }
  return (
    <S.Wrapper>
      <S.Button onClick={() => nav('/user/edit')}>회원 정보 수정</S.Button>
      <S.Button onClick={() => nav('/user/edit/password')}>
        비밀번호 수정
      </S.Button>
      <S.Button onClick={logout}>로그아웃</S.Button>
    </S.Wrapper>
  );
}
