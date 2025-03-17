export function handleTitleMessage(title, setTitleMessage) {
  if (title === '') {
    setTitleMessage('제목을 작성해 주세요.');
  } else if (title.length > 26) {
    setTitleMessage('제목은 최대 26자까지 가능합니다.');
  } else {
    setTitleMessage('');
  }
}

export function handleContentMessage(content, setContentMessage) {
  if (content === '') {
    setContentMessage('내용을 작성해 주세요.');
  } else {
    setContentMessage('');
  }
}
