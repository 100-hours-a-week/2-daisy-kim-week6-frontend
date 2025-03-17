import React, { useEffect, useState } from 'react';
import Input from '../../components/inputBox/userInput';
import Header from '../../components/header/header';
import * as S from './style/editStyle';
import SubmitButton from '../../components/button/submitButton';
import api from '../../utils/axios';
import HandleInputs from '../../utils/inputLogics/handleInputs';
import {
  handlePwConfirmMessage,
  handlePwMessage,
} from '../../utils/validation/userValidation';

export default function PwEdit() {
  const [show, setShow] = useState(false);

  const {
    password,
    passwordConfirm,
    handlePassword,
    handlePasswordConfirm,

    passwordMessage,
    passwordConfirmMessage,
    setPasswordMessage,
    setPasswordConfirmMessage,

    isdisable,
    handleDisable,
  } = HandleInputs();

  useEffect(() => {
    handlePwMessage(password, setPasswordMessage);
    handlePwConfirmMessage(
      password,
      passwordConfirm,
      setPasswordConfirmMessage
    );
  }, [
    password,
    passwordConfirm,
    setPasswordConfirmMessage,
    setPasswordMessage,
  ]);

  useEffect(() => {
    handleDisable();
  }, [passwordMessage, passwordConfirmMessage, handleDisable]);

  async function updatePassword() {
    const requestData = { password, passwordConfirm };
    try {
      const response = await api.patch('/user/password', requestData);
      console.log(response.data);
      setShow(true);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <S.Wrapper>
      <Header back={true} myPage={true} />
      <S.Title>비밀번호 수정</S.Title>
      <S.Container>
        <Input
          title="비밀번호"
          placeholder="비밀번호를 입력하세요. (8자 ~ 20자)"
          isPw={true}
          func={handlePassword}
          helper={passwordMessage}
        />
        <Input
          title="비밀번호 확인"
          placeholder="비밀번호를 한 번 더 입력하세요."
          isPw={true}
          func={handlePasswordConfirm}
          helper={passwordConfirmMessage}
        />
      </S.Container>
      <SubmitButton
        func={updatePassword}
        text="수정하기"
        isDisable={isdisable}
      />
      {show ? <S.EditOk>수정 완료</S.EditOk> : null}
    </S.Wrapper>
  );
}
