import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import * as S from './style/LoginStyle';
import Input from '../../components/inputBox/userInput';
import { useNavigate } from 'react-router-dom';
import ProfileInput from '../../components/inputBox/profileImg';
import SubmitButton from '../../components/button/submitButton';
import api from '../../utils/axios';
import HandleInputs from '../../utils/inputLogics/handleInputs';
import {
  handleEmailMessage,
  handleImageUrlMessage,
  handleNameMessage,
  handlePwConfirmMessage,
  handlePwMessage,
} from '../../utils/validation/userValidation';

export default function Signup() {
  const nav = useNavigate();
  const {
    name,
    password,
    passwordConfirm,
    email,
    imageUrl,
    handleEmail,
    handleImgUrl,
    handleName,
    handlePassword,
    handlePasswordConfirm,

    emailMessage,
    passwordMessage,
    passwordConfirmMessage,
    imageUrlMessage,
    nameMessage,
    setEmailMessage,
    setPasswordMessage,
    setPasswordConfirmMessage,
    setImageUrlMessage,
    setNameMessage,

    isdisable,
    handleDisable,

    previewImg,
  } = HandleInputs();

  const fetchSignup = async () => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('password', password);
      formData.append('passwordConfirm', passwordConfirm);
      formData.append('email', email);
      if (imageUrl) {
        formData.append('imageUrl', imageUrl);
      }
      const response = await api.post('/user/registeration', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.id !== null) {
        nav('/');
      } else {
        setEmailMessage(response.data.message);
      }
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    handleEmailMessage(email, setEmailMessage);
    handlePwMessage(password, setPasswordMessage);
    handlePwConfirmMessage(
      password,
      passwordConfirm,
      setPasswordConfirmMessage
    );
    handleNameMessage(name, setNameMessage);
    handleImageUrlMessage(imageUrl, setImageUrlMessage);
  }, [
    email,
    password,
    passwordConfirm,
    imageUrl,
    name,
    setEmailMessage,
    setImageUrlMessage,
    setNameMessage,
    setPasswordConfirmMessage,
    setPasswordMessage,
  ]);

  useEffect(() => {
    handleDisable();
  }, [
    emailMessage,
    passwordMessage,
    passwordConfirmMessage,
    imageUrlMessage,
    nameMessage,
    handleDisable,
  ]);

  return (
    <S.Wrapper>
      <Header back={true} myPage={false} />
      <S.Title>회원가입</S.Title>
      <S.InputWrapper>
        <ProfileInput
          title={'프로필 사진'}
          func={handleImgUrl}
          helper={imageUrlMessage}
          imageUrl={previewImg}
        />
        <Input
          title={'이메일*'}
          placeholder={'이메일을 입력하세요.'}
          func={handleEmail}
          helper={emailMessage}
        />
        <Input
          title={'비밀번호*'}
          placeholder={'비밀번호를 입력하세요. (8자 이상 20자 이하)'}
          isPw={true}
          func={handlePassword}
          helper={passwordMessage}
        />
        <Input
          title={'비밀번호 확인*'}
          placeholder={'비밀번호를 한 번 더 입력하세요. (8자 이상 20자 이하)'}
          isPw={true}
          func={handlePasswordConfirm}
          helper={passwordConfirmMessage}
        />
        <Input
          title={'닉네임*'}
          placeholder={'닉네임을 입력하세요.'}
          func={handleName}
          helper={nameMessage}
        />
        <SubmitButton
          func={fetchSignup}
          text="회원가입"
          isDisable={isdisable}
        />
        <S.GotoSignup onClick={() => nav('/')}>로그인하러 가기</S.GotoSignup>
      </S.InputWrapper>
    </S.Wrapper>
  );
}
