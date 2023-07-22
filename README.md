## 📘프로젝트 소개

#### 알라딘 API를 이용하여 만든 도서 검색 사이트 입니다.

평소 책읽기를 좋아하여 주제를 도서사이트로 선택하였습니다. 혼자서 프론트와 백엔드 간의 Restful API를 사용해보는 것을 목적으로 진행한 간단한 프로젝트입니다.

<br>

## 🛠기술 스택

- Frontend: React, Redux, BootStrap
- Backend: Express.js
- Database: MySQL
- Deployment: AWS(EC2)

## 🏃🏻‍♀️로컬 실행 방법

1. 레포지토리를 클론하고자 하는 디렉토리에서 아래 명령어 수행

```
git clone <레포지토리 주소>
```

<br>
2. 클론한 디렉토리에서 server 디렉토리로 들어가 아래 명령어를 통해 필요한 module설치

```
npm install
```

<br>
3. backend에서 필요한 `.env` 설정
- 아래 설명에 따라 환경변수 설정

```
PORT=5001
MYSQL_HOST=localhost
MYSQL_DATABASE=search_library
MYSQL_USERNAME=<MYSQL DB 이름>
MYSQL_PASSWORD=<MYSQL DB 비밀번호>
REACT_APP_API_KEY=<알라딘 API KEY>
REACT_APP_LOCAL_HOST=<client 연결 호스트>
```

<br>

4. express 앱을 실행

```
node server
```

5. client 디렉토리로 들어가 아래 명령어를 통해 필요한 module설치 후 React 앱을 실행

```
cd client
npm install
npm run start
```
