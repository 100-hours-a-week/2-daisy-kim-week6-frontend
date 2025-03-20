# 📌 프로젝트 개요
"아무말 대잔치" 커뮤니티 프론트엔드 구현

### 🔗 백엔드 레포지토리 링크
https://github.com/100-hours-a-week/2-daisy-kim-week6-backend

### 🛠️ 기술 스택

# 📌 결과 영상
https://github.com/user-attachments/assets/2e62818c-5f6f-40b9-86c0-2d574c100834

# 📌 폴더 구조
```
┗ 📂 src
  ┗ 📂 components
    ┗ 📂 board //게시글 목록에서의 각 게시글 항목, 게시글 상세 화면에서 제목 이미지, 사용자 정보(게시글, 댓글), 게시글 상세 조회에서 헤더
      ┗ 📂 style
    ┣ 📂 button // 수정/삭제 버튼, 제출 버튼
    ┗ 📂 comment // 댓글 전체 부분, 댓글 항목 하나, 댓글 입력 부분
      ┗ 📂 style
    ┣ 📂 header //모든 화면의 헤더, 헤더의 프로필 토글
    ┣ 📂 inputBox // 각종 회원 관련 입력창, 사용자 프로필 이미지 등록
    ┗ 📂 popup //삭제 및 탈퇴 버튼의 모달
  ┗ 📂 pages
    ┣ 📂 board 
    ┗ 📂 user
  ┗ 📂 utils
    ┣ 📂 api // 게시물 목록, 사용자 정보, 댓글 목록 조회 api
    ┣ 📂 inputLogics //게시글 작성, 회원가입에서 입력 처리 로직
    ┗ 📂 validation //helper 텍스트, 제출 버튼 활성화 여부, 날짜 출력 형식 변환
```

# 📌 구현 기능
| 화면 및 컴포넌트 | 파일명 |
| --- | --- |
| 로그인 화면 | Login.jsx |
| 회원가입 화면 | Signup.jsx |
| 회원 정보 수정 화면 | infoEdit.jsx |
| 비밀번호 수정 화면 | pwEdit.jsx |
| 게시글 목록 조회 화면 | boardList.jsx |
| 게시글 상세 조회 화면 | boardDetail.jsx |
| 게시글 작성, 수정 화면 | boardPost.jsx |
| 게시글 목록 화면의 각 게시글 아이템 컴포넌트 | boardItemBox.jsx |
| 게시글 상세 화면의 제목, 내용 컴포넌트 | contentBody.jsx |
| 게시글 상세 화면의 제목, 생성 시각, 수정, 삭제 버튼을 묶은 게시글의 상단 컴포넌트 | components/board/header.jsx |
|  | |

# 📌 회고
### 1. 댓글 개수 화면 새로고침 문제
### 2. api, 처리 로직 분리 문제


### 궁금한 점
혹시 백엔드, 프론트엔드 과제 한 것 중 어느 부분의 가능성이 더 보이는지 케빈의 의견이 궁금합니다.
