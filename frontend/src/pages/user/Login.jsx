import React from 'react';

export default function Login() {
  return (
    <div>
      <header>아무말 대잔치</header>
      <div>
        <h2>아무말 대잔치</h2>
        <div>
          <div>
            <div>이메일</div>
            <input type="text" placeholder="이메일을 입력하세요." />
            <div>helper text</div>
          </div>
          <div>
            <div>비밀번호</div>
            <input type="text" placeholder="비밀번호를 입력하세요." />
            <div>helper text</div>
          </div>
        </div>
        <div>로그인</div>
        <div>회원가입</div>
      </div>
    </div>
  );
}
