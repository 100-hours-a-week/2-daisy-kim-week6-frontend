import api from '../axios';

export default async function fetchComments(id, setData) {
  try {
    const response = await api.get(`/board/${id}/comment`);
    setData(response.data);
  } catch (e) {
    console.log(e);
  }
}
