import React, { useEffect, useState } from 'react';
import Input from '../../components/inputBox/userInput';
import ProfileInput from '../../components/inputBox/profileImg';
import Header from '../../components/header/header';
import * as S from './style/editStyle';
import { useNavigate } from 'react-router-dom';
import SubmitButton from '../../components/button/submitButton';
import GetUserInfo from '../../utils/api/getUserInfo';
import HandleInputs from '../../utils/inputLogics/handleInputs';
import {
  handleImageUrlMessage,
  handleNameMessage,
} from '../../utils/validation/userValidation';
import api from '../../utils/axios';

export default function InfoEdit() {
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const { data, fetchUserInfo } = GetUserInfo();
  const [newProfile, setNewProfile] = useState('');

  const {
    name,
    imageUrl,
    setName,
    setImageUrl,
    handleImgUrl,
    handleName,

    imageUrlMessage,
    nameMessage,
    setImageUrlMessage,
    setNameMessage,

    isdisable,
    handleDisable,
  } = HandleInputs();

  useEffect(() => {
    handleNameMessage(name, setNameMessage);
    handleImageUrlMessage(imageUrl, setImageUrlMessage);
  }, [imageUrl, name, setImageUrlMessage, setNameMessage]);

  useEffect(() => {
    handleDisable();
  }, [imageUrlMessage, nameMessage, handleDisable]);

  useEffect(() => {
    fetchUserInfo();
  }, []);

  useEffect(() => {
    setImageUrl(data.imageUrl);
    if (data.userName) setName(data.userName);
  }, [data]);

  async function updateUserInfo() {
    const requestData = { name, imageUrl };
    try {
      const response = await api.patch('/user', requestData);
      setShow(true);
      setImageUrl(response.data.imageUrl);
      setNewProfile(response.data.imageUrl);
      await fetchUserInfo();
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function withdraw() {
    try {
      await api.delete('/user/withdraw');
    } catch (e) {
      console.log(e.response.data);
    } finally {
      nav('/');
    }
  }

  return (
    <S.Wrapper>
      <Header back={true} myPage={true} newProfile={newProfile} />
      <S.Title>회원정보 수정</S.Title>
      <S.Container>
        <ProfileInput
          title="프로필 사진*"
          func={handleImgUrl}
          imageUrl={imageUrl}
          helper={imageUrlMessage}
        />
        <Input title="이메일" value={data.email} noInput={true} />
        <Input
          title="닉네임"
          placeholder={data.userName}
          func={handleName}
          helper={nameMessage}
        />
      </S.Container>
      <SubmitButton
        func={updateUserInfo}
        text="수정하기"
        isDisable={isdisable}
      />
      <S.WithdrawButton onClick={withdraw}>회원탈퇴</S.WithdrawButton>
      {show ? <S.EditOk>수정 완료</S.EditOk> : null}
    </S.Wrapper>
  );
}
