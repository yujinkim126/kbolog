# ✔️ KBOLOG
## ◾️ 프로젝트 개요
네이버 일정의 프로야구 정보를 이용해 kbo 경기 정보를 가져와 유저에게 제공하고, 직관 기록을 할 수 있는 어플
<br/>
<br/>
## ◾️ 구현 일정
2024.09.04 ~ ing
<br/>
<br/>
## ◾️ 주요 기능
- 응원하는 팀 선택
- 선택한 팀의 경기 일정 제공
- 사진 (티켓/음식 등등) 등록 기능
- 메모 기능 (ex. 승리투수, 기록 등등)
- 나의 직관 횟수 및 승률 제공
<br/>

## 📍 사용 기술
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
<img src="https://img.shields.io/badge/Zustand-cccccc?style=for-the-badge&logo=Zustand&logoColor=white"/>
<img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white"/>
<br/>

## ◾️ 구현 화면
- 설정
    - 응원하는 팀 선택 기능
- 메인
    - 나의 직관 횟수 및 승률 제공
    - 글 등록 버튼 또는 달력 화면
- 글 등록 화면
    - 일정 (경기) 선택 후
    - 이미지 등록
    - 스코어 및 직관 기록 등록하기
    - 경기장 및 좌석 정보 등록
    - 메모 기능
    - 한줄평 
<br/>

## ◾️ 시나리오
- 첫 진입 시 응원하는 팀이 있으면 메인 / 없으면 설정이나 팀 선택 화면 이동
- 메인 화면에서 총 기록 리스트 노출 (직관 횟수+승률 제공) 
  - '+버튼'으로 글 등록
- 글 등록 시나리오 
    - 사용자가 선택한 팀의 경기 일정 제공  ⇒ 날짜 선택 ⇒ 내용 기록 ⇒ 등록 ⇒ 총 기록한 직관 리스트(메인)
<br/>
<br/>
