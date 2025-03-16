export function handleEmailMessage(email, setEmailMessage) {
  const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
  if (email === '') {
    setEmailMessage('아이디를 입력해 주세요.');
  } else if (!emailRegex.test(email)) {
    setEmailMessage('올바른 이메일 주소 형식을 입력해 주세요.');
  } else {
    setEmailMessage('');
  }
}

export function handlePwMessage(password, setPwMessage) {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

  if (password === '') {
    setPwMessage('비밀번호를 입력해 주세요.');
  } else if (!passwordRegex.test(password)) {
    setPwMessage('대소문자, 숫자, 특수문자를 최소 1개씩 포함해야 합니다.');
  } else {
    setPwMessage('');
  }
}

export function handlePwConfirmMessage(
  password,
  passwordConfirm,
  setPasswordConfirmMessage
) {
  if (passwordConfirm === '') {
    setPasswordConfirmMessage('비밀번호를 한 번 더 입력해 주세요.');
  } else if (password !== passwordConfirm) {
    setPasswordConfirmMessage('비밀번호가 다릅니다.');
  } else {
    setPasswordConfirmMessage('');
  }
}

export function handleNameMessage(name, setNameMessage) {
  if (name === '') {
    setNameMessage('닉네임을 입력해 주세요.');
  } else if (name.includes(' ')) {
    setNameMessage('띄어쓰기를 없애 주세요.');
  } else if (name.length > 10) {
    setNameMessage('닉네임은 최대 10자까지 가능합니다.');
  } else {
    setNameMessage('');
  }
}

export function handleImageUrlMessage(imageUrl, setImageUrlMessage) {
  if (imageUrl === '') {
    setImageUrlMessage('프로필 사진을 추가해 주세요.');
  } else {
    setImageUrlMessage('');
  }
}
