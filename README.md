# Xflix
> React - NextJS를 공부하기 위한 험난한 여정


## 목차
- [참여자](#참여자)
- [컨벤션](#컨벤션)
- [목표](#목표)
- [일정 및 진행 상황](#일정-및-진행-상황)


## 참여자
|이름|github id|각오 한마디|
|---|---|---|
|박준영 |designdefined|열심히 해봅시다|
|김윤식|yunsik29|화이팅합니다!|
|임승현 |bubblelim|git너무 어렵다|
|백창인| nuagenic| 화이팅!!|


## 컨벤션

### 스펙
- framework: NextJS
- package manager: yarn classic
- issue tracking: 깃허브
- documentation: 깃허브, 노션
- environment
  - macOS / windows
  - visual studio code

### 브랜칭 전략
- main 브랜치에는 푸쉬하지 않는다
  - 브랜치를 판 다음에, main으로 PR 걸기
  - PR 리뷰를 1개 이상 받은 후 머지
- release / static 브랜치에는 푸쉬하지 않는다.
  - main 브랜치에서만 PR 가능
  - PR 리뷰를 1개 이상 받은 후 머지
- 브랜치 명: `issue_number/type/content-in-snake-case`
  - `#1/feat/~~~`: 기능 추가 
  - `#1/fix/~~~`: 버그 픽스
  - `#1/refact/~~~`: 리팩토링

### 깃허브 전략 
- Issue
  - todo, question, bug report 등 관련된 템플릿 사용
  - 적절한 라벨 붙이기
- Pull Request
  - 템플릿 따라 내용 기입, 체크리스트 확인
  - enhancement, fix, documentation 등 적절한 라벨 붙이기
  - 관련 이슈 번호 명시


## 목표
참고: [노션:Xflix 기획안](https://www.notion.so/Xflix-8300689f382b4c1ebfc3f8d38ebdd769)


## 일정 및 진행 상황
참고: [노션:Xflix 기획안](https://www.notion.so/Xflix-8300689f382b4c1ebfc3f8d38ebdd769)
- 1주차
  - FE: 페이지 틀 짜기
  - BE: ping-pong, MongoDB 연결
  - DevOps: 정적 배포
- 2주차
  - FE: 비동기 데이터 연결
  - BE: Login, Item
  - DevOps: 동적 배포, 도메인 연결
- 3주차
  - FE: 로그인, 업로드
  - BE: Authorization
  - DevOps: -
- 4주차
  - FE: 타입스크립트 리팩토링, 홈 화면
  - BE: 타입스크립트 리팩토링
  - DevOps: -

