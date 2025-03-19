import { useCallback, useEffect, useState } from 'react';
import api from '../axios';
import HandleInputs from './handleInputs';
import {
  handleContentMessage,
  handleTitleMessage,
} from '../validation/boardValidation';
import { useNavigate, useParams } from 'react-router-dom';
import BoardInfo from '../api/getBoardInfo';

export default function BoardInputs() {
  const nav = useNavigate();
  const id = useParams().boardId;

  //제목, 내용
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  //helper
  const [titleMessage, setTitleMessage] = useState('');
  const [contentMessage, setContentMessage] = useState('');

  //버튼 활성화 여부
  const [isdisable, setDisable] = useState(true);

  const { data } = BoardInfo();
  //이미지 - 불러온 활용할 함수 ) 바로 넘길 거
  const { imageUrl, setImageUrl, handleImgUrl } = HandleInputs(data);

  //helper, 제목, 내용 핸들링
  const handleTitle = (e) => {
    handleTitleMessage(e.target.value, setTitleMessage);
    setTitle(e.target.value);
  };
  const handleContent = (e) => {
    handleContentMessage(e.target.value, setContentMessage);
    setContent(e.target.value);
  };

  useEffect(() => {
    handleTitleMessage(title, setTitleMessage);
    handleContentMessage(content, setContentMessage);
  }, [title, content, setTitleMessage, setContentMessage]);

  //제출 버튼 활성화 함수
  const handleDisable = useCallback(() => {
    if (titleMessage === '' && contentMessage === '') {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [titleMessage, contentMessage]);

  useEffect(() => {
    handleDisable();
  }, [handleDisable]);

  //게시글 작성 api
  async function postBoard() {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      if (imageUrl) {
        formData.append('imageUrl', imageUrl);
      }
      const response = await api.post('/board', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.id !== null) {
        nav(`/board/${response.data.id}`);
      } else {
        alert('로그인하세요.');
        nav('/');
      }
      console.log(response.data);
    } catch (e) {
      console.log(e.response);
    }
  }

  //게시글 업데이트
  async function updateBoard() {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);

      if (imageUrl instanceof File) {
        formData.append('imageUrl', imageUrl);
      } else if (data.imageUrl) {
        formData.append('imageUrl', data.imageUrl); // 기존 이미지 유지
      }

      const response = await api.patch(`/board/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.data.id !== null) {
        nav(`/board/${response.data.id}`);
      } else {
        alert('로그인하세요.');
        nav('/');
      }
      console.log(response.data);
    } catch (e) {
      console.log(e.response);
    }
  }

  return {
    title,
    content,
    setTitle,
    setContent,

    handleTitle,
    handleContent,

    postBoard,
    updateBoard,

    titleMessage,
    contentMessage,
    setTitleMessage,
    setContentMessage,

    imageUrl,
    setImageUrl,
    handleImgUrl,

    isdisable,
  };
}
