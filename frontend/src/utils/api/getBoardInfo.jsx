import { useNavigate, useParams } from 'react-router-dom';
import api from '../axios';
import { useState } from 'react';

export default function BoardInfo() {
  const nav = useNavigate();
  const id = useParams().boardId;
  const [data, setData] = useState('');

  async function fetchBoard() {
    try {
      const response = await api.get(`/board/${id}`);
      if (response.data.id === null) {
        nav('/board');
      }
      setData(response.data);
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return { data, fetchBoard };
}
