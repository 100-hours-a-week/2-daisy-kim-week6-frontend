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
  const [showingImg, setShowingImg] = useState('');

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

    previewImg,
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
    if (previewImg) {
      setShowingImg(previewImg);
    } else if (data.imageUrl) {
      const fullImageUrl = `http://localhost:8080${data.imageUrl}`;
      setShowingImg(fullImageUrl);
      setImageUrl(fullImageUrl);
    }
  }, [previewImg, data.imageUrl]);

  useEffect(() => {
    if (data) setName(data.name);
  }, [data]);

  async function updateUserInfo() {
    try {
      const formData = new FormData();
      if (name) {
        formData.append('name', name);
      }
      if (imageUrl) {
        formData.append('imageUrl', imageUrl);
      }

      const response = await api.patch('/user', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setShow(true);
      setImageUrl(`http://localhost:8080${response.data.imageUrl}`);
      setNewProfile(`http://localhost:8080${response.data.imageUrl}`);
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
          imageUrl={showingImg}
          helper={imageUrlMessage}
        />
        <Input title="이메일" value={data.email} noInput={true} />
        <Input
          title="닉네임"
          placeholder={data.name}
          func={handleName}
          helper={nameMessage}
          value={name}
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
