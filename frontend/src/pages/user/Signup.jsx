import React from 'react';
import Header from '../../components/header/header';
import * as S from './style/LoginStyle';
import Input from '../../components/inputBox/userInput';
import { useNavigate } from 'react-router-dom';
import ProfileInput from '../../components/inputBox/profileImg';

export default function Signup() {
  const nav = useNavigate();
  return (
    <S.Wrapper>
      <Header back={true} myPage={false} />
      <S.Title>회원가입</S.Title>
      <S.InputWrapper>
        <ProfileInput title={'프로필 사진'} />
        <Input title={'이메일*'} placeholder={'이메일을 입력하세요.'} />
        <Input title={'비밀번호*'} placeholder={'비밀번호를 입력하세요.'} />
        <Input
          title={'비밀번호 확인*'}
          placeholder={'비밀번호를 한 번 더 입력하세요.'}
        />
        <Input title={'닉네임*'} placeholder={'닉네임을 입력하세요.'} />
        <S.LoginButton>회원가입</S.LoginButton>
        <S.GotoSignup onClick={() => nav('/')}>로그인하러 가기</S.GotoSignup>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
