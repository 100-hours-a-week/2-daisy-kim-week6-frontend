import React, { useEffect } from 'react';
import Header from '../../components/header/header';
import * as S from './style/boardPostStyle';
import { useParams } from 'react-router-dom';
import SubmitButton from '../../components/button/submitButton';
import BoardInputs from '../../utils/inputLogics/boardInputs';
import BoardInfo from '../../utils/api/getBoardInfo';

export default function BoardPost() {
  const id = useParams().boardId;

  const {
    title,
    content,
    setTitle,
    setContent,

    postBoard,
    updateBoard,

    handleTitle,
    handleContent,
    titleMessage,
    contentMessage,
    isdisable,

    imageUrl,
    setImageUrl,
    handleImgUrl,
  } = BoardInputs();

  //게시글 수정에 필요한 변수
  const { data, fetchBoard } = BoardInfo();

  useEffect(() => {
    if (id) fetchBoard();
  }, [id, fetchBoard]);

  //데이터 세팅
  useEffect(() => {
    if (data) {
      setContent(data.content);
      setTitle(data.title);
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
        console.log(data.imageUrl);
      }
    }
  }, [data, setContent, setTitle, setImageUrl]);

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
              {imageUrl ? imageUrl.name || imageUrl : '파일을 선택해주세요.'}
            </S.ImgSpan>
            <S.InputImg id="img-input" type="file" onChange={handleImgUrl} />
          </S.InputImgWrapper>
        </S.InputWrapper>
        {id ? (
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
