import api from '../axios';

export default async function fetchBoard(setData, id, nav) {
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
