import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Input from '../../components/inputBox/userInput';
import * as S from './style/LoginStyle';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button/submitButton';
import api from '../../utils/axios';
import {
  handleEmailMessage,
  handlePwMessage,
} from '../../utils/userValidation';

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [pwMessage, setPwMessage] = useState('');
  const [isdisable, setIsdisable] = useState(true);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePw = (e) => setPassword(e.target.value);

  const fetchLogin = async () => {
    const requestData = { email, password };
    try {
      const response = await api.post('/user/authentication', requestData);
      if (response.data.id !== null) {
        nav('/board');
      } else {
        setPwMessage(response.data.message);
        setEmailMessage(response.data.message);
      }
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleEmailMessage(email, setEmailMessage);
    handlePwMessage(password, setPwMessage);
  }, [email, password]);

  useEffect(() => {
    if (emailMessage === '' && pwMessage === '') {
      setIsdisable(false);
    } else {
      setIsdisable(true);
    }
  }, [emailMessage, pwMessage]);

  return (
    <S.Wrapper>
      <Header back={false} myPage={false} />
      <S.InputWrapper>
        <S.Title>로그인</S.Title>
        <Input
          title={'이메일'}
          placeholder={'이메일을 입력하세요.'}
          func={handleEmail}
          helper={emailMessage}
        />
        <Input
          title={'비밀번호'}
          placeholder={'비밀번호를 입력하세요. (8자 이상 20자 이하)'}
          isPw={true}
          func={handlePw}
          helper={pwMessage}
        />
        <SubmitButton func={fetchLogin} text="로그인" isDisable={isdisable} />
        <S.GotoSignup onClick={() => nav('signup')}>회원가입</S.GotoSignup>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
