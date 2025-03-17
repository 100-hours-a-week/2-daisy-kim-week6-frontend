import { useParams } from 'react-router-dom';
import api from '../axios';
import { useState } from 'react';

export default function CommentList() {
  const id = useParams().boardId;
  const [comments, setComments] = useState([]);

  async function fetchComments() {
    try {
      const response = await api.get(`/board/${id}/comment`);
      setComments(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return {
    comments,
    setComments,
    id,
    fetchComments,
  };
}
