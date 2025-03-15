import React, { useState } from 'react';
import Input from '../../components/inputBox/userInput';
import ProfileInput from '../../components/inputBox/profileImg';
import Header from '../../components/header/header';
import * as S from './style/editStyle';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button/submitButton';

export default function InfoEdit() {
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  function showEditOk() {
    setShow(true);
  }
  return (
    <S.Wrapper>
      <Header back={true} myPage={true} />
      <S.Title>회원정보 수정</S.Title>
      <S.Container>
        <ProfileInput title="프로필 사진*" />
        <Input title="이메일" placeholder="scw09268@naver.com" no={true} />
        <Input title="닉네임" value="daisy" />
      </S.Container>
      <SubmitButton func={showEditOk} text="수정하기" />
      <S.WithdrawButton onClick={() => nav('/')}>회원탈퇴</S.WithdrawButton>
      {show ? <S.EditOk>수정 완료</S.EditOk> : null}
    </S.Wrapper>
  );
}
