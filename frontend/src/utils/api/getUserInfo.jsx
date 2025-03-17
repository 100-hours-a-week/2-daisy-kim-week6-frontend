import { useState } from 'react';
import api from '../axios';

export default function GetUserInfo() {
  const [data, setData] = useState('');

  async function fetchUserInfo() {
    try {
      const response = await api.get('/user');
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  }
  return { data, fetchUserInfo };
}
