import React from 'react';
import Header from '../../components/header/header';
import Input from '../../components/inputBox/userInput';
import * as S from './style/LoginStyle';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button/submitButton';

export default function Login() {
  const nav = useNavigate();
  function clickAction() {
    nav('/board');
  }
  return (
    <S.Wrapper>
      <Header back={false} myPage={false} />
      <S.InputWrapper>
        <S.Title>로그인</S.Title>
        <Input title={'이메일'} placeholder={'이메일을 입력하세요.'} />
        <Input title={'비밀번호'} placeholder={'비밀번호를 입력하세요.'} />
        <SubmitButton func={clickAction} text="로그인" />
        <S.GotoSignup onClick={() => nav('signup')}>회원가입</S.GotoSignup>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
