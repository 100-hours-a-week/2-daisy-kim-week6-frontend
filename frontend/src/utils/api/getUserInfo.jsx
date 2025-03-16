import api from '../axios';

export default async function fetchUserInfo(setData) {
  try {
    const response = await api.get('/user');
    setData(response.data);
    console.log(response.data);
  } catch (e) {
    console.log(e);
  }
}
