import React from 'react';
import * as S from './style/boardDetailStyle';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/header';

export default function BoardDetail() {
  const param = useParams();
  return (
    <S.Wrapper>
      <Header />
      <S.ContentWrapper>
        <S.HeaderWrapper>
          <S.Title>제목1</S.Title>
          <S.HeaderBottom>
            <S.UserInfo>
              <S.UserImg>프사</S.UserImg>
              <S.UserName>이름</S.UserName>
              <S.BoardDate>시간</S.BoardDate>
            </S.UserInfo>
            <S.ButtonWrapper>
              <S.Button>수정</S.Button>
              <S.Button>삭제</S.Button>
            </S.ButtonWrapper>
          </S.HeaderBottom>
        </S.HeaderWrapper>
        <div>
          <div>본문 이미지</div>
          <div>본문 내용</div>
          <div>
            <div>
              0 <br />
              좋아요수
            </div>
            <div>
              0 <br />
              조회수
            </div>
            <div>
              0 <br />
              댓글
            </div>
          </div>
        </div>
      </S.ContentWrapper>
      <div>
        <div>
          <div>입력창</div>
          <div>
            <div>댓글 등록</div>
          </div>
        </div>
        <div>
          <div>댓글</div>
        </div>
      </div>
    </S.Wrapper>
  );
}
