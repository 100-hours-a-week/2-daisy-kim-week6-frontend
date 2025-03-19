import { useState } from 'react';

function HandleInputs() {
  const [imageUrl, setImageUrl] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');

  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [imageUrlMessage, setImageUrlMessage] = useState('');
  const [nameMessage, setNameMessage] = useState('');
  const [isdisable, setIsdisable] = useState(true);
  const [previewImg, setPreviewImg] = useState('');

  const handleImgUrl = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageUrl(file);
      setPreviewImg(URL.createObjectURL(file));
    }
  };

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handlePasswordConfirm = (e) => setPasswordConfirm(e.target.value);
  const handleName = (e) => setName(e.target.value);

  function handleDisable() {
    if (
      emailMessage === '' &&
      passwordMessage === '' &&
      passwordConfirmMessage === '' &&
      imageUrlMessage === '' &&
      nameMessage === ''
    ) {
      setIsdisable(false);
    } else {
      setIsdisable(true);
    }
  }
  return {
    imageUrl,
    setImageUrl,
    email,
    setEmail,
    password,
    setPassword,
    passwordConfirm,
    setPasswordConfirm,
    name,
    setName,

    handleImgUrl,
    handleEmail,
    handlePassword,
    handlePasswordConfirm,
    handleName,

    emailMessage,
    setEmailMessage,
    passwordMessage,
    setPasswordMessage,

    passwordConfirmMessage,
    setPasswordConfirmMessage,
    imageUrlMessage,
    setImageUrlMessage,
    nameMessage,
    setNameMessage,

    isdisable,
    setIsdisable,
    handleDisable,

    previewImg,
    setPreviewImg,
  };
}
export default HandleInputs;
