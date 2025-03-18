import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import * as S from './style/boardPostStyle';
import { useParams } from 'react-router-dom';
import SubmitButton from '../../components/button/submitButton';
import BoardInputs from '../../utils/inputLogics/boardInputs';
import {
  handleContentMessage,
  handleTitleMessage,
} from '../../utils/validation/boardValidation';
import BoardInfo from '../../utils/api/getBoardInfo';

export default function BoardPost() {
  const id = useParams().boardId;

  const {
    title,
    content,
    imageUrl,
    setTitle,
    setContent,
    postBoard,
    setImageUrl,
    updateBoard,
    handleTitle,
    handleContent,
    handleImgUrl,
    titleMessage,
    contentMessage,
    setTitleMessage,
    setContentMessage,
    isdisable,
    handleDisable,
    previewImg,
    setPreviewImg,
  } = BoardInputs();

  const { data, fetchBoard } = BoardInfo();

  useEffect(() => {
    handleDisable();
  }, [titleMessage, contentMessage, handleDisable]);

  useEffect(() => {
    handleTitleMessage(title, setTitleMessage);
    handleContentMessage(content, setContentMessage);
  }, [title, content, setTitleMessage, setContentMessage]);

  useEffect(() => {
    if (id) fetchBoard();
  }, []);

  useEffect(() => {
    if (data) {
      setContent(data.content);
      setTitle(data.title);
      if (data.imageUrl) setImageUrl(data.imageUrl);
      else {
        setImageUrl(previewImg);
      }
    }
  }, [data]);

  return (
    <S.Wrapper>
      <Header back={true} myPage={true} />
      <S.Container>
        <S.Title>게시글 {id ? '수정' : '작성'}</S.Title>
        <S.InputWrapper>
          <S.TitleText>제목*</S.TitleText>
          <S.InputContainer>
            {id ? (
              <S.InputTitle onChange={handleTitle} value={title} />
            ) : (
              <S.InputTitle
                placeholder="제목을 입력해주세요. (최대 26글자)"
                onChange={handleTitle}
              />
            )}
          </S.InputContainer>
          <S.HelperText>{titleMessage}</S.HelperText>

          <S.TitleText>내용*</S.TitleText>
          <S.InputContainer>
            {id ? (
              <S.InputContent onChange={handleContent} value={content} />
            ) : (
              <S.InputContent
                placeholder="내용을 입력해주세요."
                onChange={handleContent}
              />
            )}
          </S.InputContainer>
          <S.HelperText>{contentMessage}</S.HelperText>

          <S.TitleText>이미지</S.TitleText>
          <S.InputImgWrapper>
            <S.CustomLabel htmlFor="img-input">파일 선택</S.CustomLabel>
            <S.ImgSpan>
              {imageUrl ? imageUrl.name : '파일을 선택해주세요.'}
            </S.ImgSpan>
            <S.InputImg id="img-input" type="file" onChange={handleImgUrl} />
          </S.InputImgWrapper>
        </S.InputWrapper>
        {id ? ( //수정 api로 나중에 변경
          <SubmitButton
            func={updateBoard}
            text="수정하기"
            isDisable={isdisable}
          />
        ) : (
          <SubmitButton func={postBoard} text="완료" isDisable={isdisable} />
        )}
      </S.Container>
    </S.Wrapper>
  );
}
