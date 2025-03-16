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
