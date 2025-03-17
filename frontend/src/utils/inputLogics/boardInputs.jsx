import { useState } from 'react';
import api from '../axios';
import HandleInputs from './handleInputs';
import {
  handleContentMessage,
  handleTitleMessage,
} from '../validation/boardValidation';
import { useNavigate, useParams } from 'react-router-dom';

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

  const { imageUrl, setImageUrl, handleImageUrl } = HandleInputs();

  function handleDisable() {
    if (titleMessage === '' && contentMessage === '') {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }

  async function postBoard() {
    const requestData = { title, content, imageUrl };
    try {
      const response = await api.post('/board', requestData);
      if (response.data.id !== null) {
        nav(`/board/${response.data.id}`);
      } else {
        alert('로그인하세요.');
        nav('/');
      }
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function updateBoard() {
    const requestData = { title, content, imageUrl };
    try {
      const response = await api.patch(`/board/${id}`, requestData);
      if (response.data.id !== null) {
        nav(`/board/${response.data.id}`);
      } else {
        alert('로그인하세요.');
        nav('/');
      }
      console.log(response.data);
    } catch (e) {
      console.log(e.response);
      console.log(requestData);
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
    handleImageUrl,
    postBoard,
    updateBoard,

    titleMessage,
    contentMessage,
    setTitleMessage,
    setContentMessage,

    isdisable,
    setDisable,
    handleDisable,
  };
}
