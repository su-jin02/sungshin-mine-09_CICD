<p align="center">
  <img src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/fc7f3646-77ca-40ab-b747-31a05804ed65" style="width:200px; height:200px">
 </p>
 
# 🔮성신마인 09번지✨ (Sungshin_Mine_09) 
2023-1학기 성신여자대학교 컴퓨터공학과 서버시스템구축실습(심화전공) 프로젝트 산출물을   
2023-2학기성신여자대학교 컴퓨터공학과 오픈소스소프트웨어(심화전공)에서 젠킨스와 쿠버네틱스를 활용해 재배포 하는 과정에 참여함

>🛠️개발기간 : 
><br>2023.3.15 ~ 2023.4.18 (프로젝트 계획, 요구사항 분석, 데이터베이스 설계, 플로우차트 및 와이어프레임 설계)
><br>2023.4.26 ~ 2023.6.7 (프론트엔드 구현 및 백엔드 API 구현)
><br>2023.09 ~ 2023.12 (젠킨스와 쿠버네틱스를 활용한 배포)  **← 해당 기간에만 본인(su-jin02)은 참여**


### 🤔성신마인 09번지란?
- 서비스명 소개
  - <b>성신여자대학교 "***재학생***"들이 우리가 만든 웹사이트를 통해서 자신의 마음에 딱 드는 공동구매를 찾았으면(캐냈으면) 하는 마음으로 지은 이름</b>이다. 그래서 광산과, 내꺼라는 의미를 둘 다 가진 <b>'Mine'</b> 이라는 단어가 떠올랐고, 성신여자대학교 재학생들만 참여할 수 있는 특수성을 고려하여, <b>‘성신마인(Sungshin Mine)'</b>이라고 지었다. <br>뒤에 <b>‘09번지’</b>에서 <b>‘09’</b>는 학우들 사이에서 공동구매라는 단어를 줄여서 은어로 '공구'라고도 부르기도 해서 그 부분에서 발음의 유사성을 가지고 온 것이다. 그리고 학우들이 우리가 만든 하나의 웹사이트에 모두 모여 공동구매를 진행하거나 참여하는 것이니까, 우리의 웹사이트가 학우들에게는 장소처럼 느껴질 수도 있겠다는 생각에 <b>'번지'</b>라는 말도 붙여주었다. <br>그래서 <b>'성신마인 09번지'</b>라고 서비스 이름을 지었다.
- 서비스의 목적
  - <b>성신여자대학교 "***재학생***"들을 위한 공동구매 웹서비스.</b> <br>학우들이 진행하는 공동구매 절차가 여러 플랫폼에 퍼져있다는 불편함을 개선하기 위해 이러한 서비스를 만들게 되었다.
  

📺데모 영상 링크 :
[https://drive.google.com/file/d/1VHoCAJBAXntbcAifg9qwJr0Vd6IUeABR/view?usp=sharing](https://drive.google.com/file/d/1sud0OxtX7M0W7C47CUzCzh-i2lBpGVmC/view?usp=drive_link)

## 🔥프로젝트 소개
새학기가 되면, 성신여자대학교의 많은 학생들은 자신이 직접 디자인한 학잠, 새내기 학생들을 위한 과잠, 수강 과목에 필요한 준비물 등을 공동으로 구매하기 위해 커뮤니티(ex. 에브리타임)에 수요조사를 올리고는 한다. 

우리 학교 학생들의 공동구매 과정은 보통, 
  1. 커뮤니티에서 수요조사 게시글을 올려 참여자를 모으고, 
  2. 진행 공지용 카카오톡 방을 만들고, 
  3. 구글 폼으로 입금자를 확인하고, 
  4. 공동구매 물품을 배부하는 과정으로 이루어진다. 

하지만 이러한 과정들이 모두 각각 다른 플랫폼에서 이루어지면서 상당한 불편함을 초래하고 있다. 

뿐만 아니라 대학생들의 대표적인 커뮤니티인 에브리타임에서는 게시글 알림 기능이 없으므로, 수요조사에 참여해도 실제 판매 폼이 열렸을 때 알림을 받을 방법이 없다. 또한 공동구매 관련 게시글이 커뮤니티의 이곳저곳에 흩어져 있기에 참여만 하고 잊어버리기도 쉽다. 

<b>“성신마인 09번지”는 이러한 불편함을 해소하기 위한 서비스이다. 
<br>본 서비스는 진행 중인 공동구매를 한곳에 모아주고, 학우들에게 공동구매 주최 및 참여에 대한 편의를 제공하는 것을 목적으로 한다.</b>

## 👩🏻‍💻주요 기능
<h4>💟 : only 참여자, ⭐: only 주최자</h4>


### 1️⃣회원
- 이메일 인증+회원가입, 로그인, 아이디 찾기, 비밀번호 재설정, 아이디/비밀번호 변경, 마이페이지, 새소식 알림

### 2️⃣공동구매방
- 홈화면, 공동구매방 생성 및 삭제(삭제는 ⭐), 공동구매 상품 상세정보 조회, 모든 공동구매 조회(=전체 공구방), <br>수요조사/마감임박 단계 상품 조회, 수요조사 참여💟, 수요조사 통계⭐, <br>새소식 생성⭐, 새소식 확인, 채팅방 생성💟, 채팅 메세지 조회 및 전송 

### 3️⃣입금폼
- 입금폼 양식 생성⭐, 입금폼 작성, 입금폼 제출, 입금계좌 확인, 입금폼 전체결과 조회⭐


<p align="center">
<h4>♥️ HLD(High-Level-Design)으로 전체 기능 파악하기🔽 (made by <b>yujetak</b>)</h4>
  <img src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/09e3df85-22e7-43b1-ab7a-8005e161704a" style="width:650px; height:650px">
</p>

## 💻화면 구성
### 1️⃣회원
| 회원가입<br>(이메일 인증)  |  회원가입<br>(정보 입력) | 회원가입 완료 |  로그인  | 마이페이지 | 
| :-------------------------------------------: | :------------: | :---------: | :------------: | :------------: |
|  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/2d0dd688-1f30-468e-b555-8dec9030f7f9"/> |  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/e8b970e0-f0e2-4d19-9be4-a414fd280ab3"/>|  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/bd60fe6a-282d-41b0-acf7-0c37be7f384c"/> | <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/4885f5d2-cc70-4f7d-8fce-e894298d5fda"/> | <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/caab0f58-f891-447e-add1-b262ca88cc16"/> |
| 아이디 찾기 | 비밀번호 재설정 | 아이디 변경  |  비밀번호 변경  | 새소식 알림 |
| <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/00a4cd06-12bb-480f-8978-592525f7cf55"/>   |  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/8c62d93f-442c-4346-ab00-f19472a8431a"/>     | <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/ad0ae3af-3cf3-4d78-badf-0ec5947051be"/> | <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/4bf6fadc-967c-4e34-86d0-14b212949aac"/> | <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/f7e5dad2-dc65-476f-9266-41590936dfa2"/> |


### 2️⃣공동구매방
💟 : only 참여자, ⭐: only 주최자

| 홈화면  |  공동구매방 생성  | 공동구매방 삭제⭐ | 상품 상세정보(⭐+💟)<br>+수요조사 참여💟 |
| :-------------------------------------------: | :------------: | :---------: | :------------: |
|  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/7fdd9a08-68ee-41b8-9e6f-c3b718f01c18"/> |  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/df8c435f-58a9-48f4-93be-bb3df4523817"/>|  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/a05e6c57-1588-4069-8ca9-c9bf85dedbc4"/> | <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/5dedcb6c-2890-46c6-8a11-899d90b97703"/> |
| 모든 공동구매 조회  |  수요조사 단계 상품 조회  | 마감임박 단계 상품 조회 | 수요조사 통계⭐ |
| <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/6fe7db47-c35b-45fb-a3a5-c73713914a48"/>   |  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/dcc3f442-0ad0-4b57-a93f-aafabf0f3e18"/>     | <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/dd6e7b94-bb82-44da-82b4-6ee457173923"/> | <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/0f10d3ca-4cd6-4207-a761-13f143ce650b"/> |
| 새소식 생성⭐ |  새소식 확인  | 채팅방 생성💟 | 채팅 메세지 조회 및 전송 |
| <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/ccf0eb95-50f5-4997-bea9-c8318c196237"/>   |  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/69576a57-ca9d-4a8e-a36a-866dd9af4682"/>     | <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/8e4edfab-cd1a-436f-a991-f0dadf917f90"/> | <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/f83ce59d-44f9-4866-93dc-c054237ca47c"/> |


### 3️⃣입금폼
| 입금폼 양식 생성⭐ | 입금폼 작성 및 제출  | 입금계좌 확인 | 입금폼 전체결과 조회⭐ |
| :-------------------------------------------: | :------------: | :---------: | :------------: |
|  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/39cdaef2-4edd-41f3-b84a-b8cdf8759ed9"/> |  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/0c177313-4a73-43c5-a260-2566e1bf22c2"/>|  <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/8b3d59f9-0c98-427e-aeb2-51a3f7b586dc"/> | <img width="600px; height: 550px" src="https://github.com/SungshinMine09/sungshin-mine-09/assets/67824465/8b4df0ee-2ebd-4e50-a768-847949f380ee"/> |


## ⚙️시작 가이드
### 요구사항
- Node.js v18.15.0
- npm v9.5.0
- nvm 1.1.11

### 설치 및 실행 방법
‼️ .env, senderInfo.json, jwtConfig.js 파일은 보안 상 민감한 정보이므로, 해당 repo에 포함되어있지 않습니다.
```cli
(이미 Node.js가 18.15.0 버전이라면, 아래의 두 명령은 생략해도 됩니다.
그렇지 않다면, nvm을 설치한 후, 아래의 두 명령을 실행하는 것을 권장합니다.)
($ nvm install 18.15.0)
($ nvm use 18.15.0)

$ git clone https://github.com/SungshinMine09/sungshin-mine-09.git
$ cd sungshin-mine-09
$ cd server
$ npm install
$ npm start
```


## 🛠️기술 스택
<div align=center><h2>개발</h2></div>
<div align=center>
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
<img src="https://img.shields.io/badge/ejs-EE1095?style=for-the-badge&logo=ejs&logoColor=white">
<br>
<img src="https://img.shields.io/badge/Google Cloud-4285F4?style=for-the-badge&logo=Google Cloud&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white">
<img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=Socket.io&logoColor=white">
<img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white">
</div>

<div align=center><h2>협업</h2></div>
<div align=center>
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white">
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white">
<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
<br>
<h4>회의록 및 개발기록👇🏻</h4>(https://www.notion.so/docs-yuje/9b143de9312b485db13055ae2a097927)
</div>


