import React from 'react';
import Header from '../../components/header/header';
import * as S from './style/boardPostStyle';
import { useNavigate, useParams } from 'react-router-dom';
import SubmitButton from '../../components/button/submitButton';

export default function BoardPost() {
  const nav = useNavigate();
  const id = useParams().boardId;
  function clickAction() {
    nav('/board');
  }

  return (
    <S.Wrapper>
      <Header back={true} myPage={true} />
      <S.Container>
        <S.Title>게시글 {id ? '수정' : '작성'}</S.Title>
        <S.InputWrapper>
          <S.TitleText>제목*</S.TitleText>
          <S.InputContainer>
            {id ? (
              //onChange로 바뀔 예정
              <S.InputTitle value="이미 있는 제목" />
            ) : (
              <S.InputTitle placeholder="제목을 입력해주세요. (최대 26글자)" />
            )}
          </S.InputContainer>
          <S.HelperText>asdf</S.HelperText>

          <S.TitleText>내용*</S.TitleText>
          <S.InputContainer>
            {id ? (
              <S.InputContent value="이미 있는 내용" />
            ) : (
              <S.InputContent placeholder="내용을 입력해주세요." />
            )}
          </S.InputContainer>
          <S.HelperText>asdf</S.HelperText>

          <S.TitleText>이미지</S.TitleText>
          <S.InputImg type="file" />
        </S.InputWrapper>
        <SubmitButton func={clickAction} />
      </S.Container>
    </S.Wrapper>
  );
}
