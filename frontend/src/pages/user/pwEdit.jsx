import React, { useState } from 'react';
import Input from '../../components/inputBox/userInput';
import Header from '../../components/header/header';
import * as S from './style/editStyle';
import SubmitButton from '../../components/button/submitButton';

export default function PwEdit() {
  const [show, setShow] = useState(false);

  function showEditOk() {
    setShow(true);
  }
  return (
    <S.Wrapper>
      <Header back={true} myPage={true} />
      <S.Title>비밀번호 수정</S.Title>
      <S.Container>
        <Input
          title="비밀번호"
          placeholder="비밀번호를 입력하세요."
          isPw={true}
        />
        <Input
          title="비밀번호 확인"
          placeholder="비밀번호를 한 번 더 입력하세요."
          isPw={true}
        />
      </S.Container>
      <SubmitButton func={showEditOk} text="수정하기" />
      {show ? <S.EditOk>수정 완료</S.EditOk> : null}
    </S.Wrapper>
  );
}
