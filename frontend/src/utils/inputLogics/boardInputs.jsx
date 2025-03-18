import { useState } from 'react';
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
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [titleMessage, setTitleMessage] = useState('');
  const [contentMessage, setContentMessage] = useState('');
  const [isdisable, setDisable] = useState(true);

  const handleTitle = (e) => {
    handleTitleMessage(e.target.value, setTitleMessage);
    setTitle(e.target.value);
  };
  const handleContent = (e) => {
    handleContentMessage(e.target.value, setContentMessage);
    setContent(e.target.value);
  };

  const { imageUrl, setImageUrl, handleImgUrl, previewImg, setPreviewImg } =
    HandleInputs();

  function handleDisable() {
    if (titleMessage === '' && contentMessage === '') {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

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

  const { data } = BoardInfo();
  async function updateBoard() {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);

      if (imageUrl) {
        formData.append('imageUrl', imageUrl);
      } else if (previewImg) {
        formData.append('imageUrl', data.imageUrl);
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
    imageUrl,
    setImageUrl,
    handleTitle,
    handleContent,
    handleImgUrl,
    postBoard,
    updateBoard,

    titleMessage,
    contentMessage,
    setTitleMessage,
    setContentMessage,

    isdisable,
    setDisable,
    handleDisable,

    previewImg,
    setPreviewImg,
  };
}
