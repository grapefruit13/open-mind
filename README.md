# Open mind

친구들에게 질문하고, 답변받을 수 있는 웹서비스

# 커밋

---

## 커밋 규칙

- `feat`: 새로운 기능에 대한 커밋
- `fix`: 버그 수정에 대한 커밋
- `build`: 빌드 관련 파일 수정 / 모듈 설치 또는 - 삭제에 대한 커밋
- `chore`: 그 외 자잘한 수정에 대한 커밋
- `ci`: ci 관련 설정 수정에 대한 커밋
- `docs`: 문서 수정에 대한 커밋
- `style`: 코드 스타일 혹은 포맷 등에 관한 커밋
- `refactor`: 코드 리팩토링에 대한 커밋
- `test`: 테스트 코드 수정에 대한 커밋
- `perf`: 성능 개선에 대한 커밋

## 커밋 단위

컴포넌트 -> 함수 단위로

# Branch

---

- `main`: 배포 준비 완료 코드만
- `dev`: `feat\_페이지이름` 브랜치에서 완성된 코드
- `feat\_페이지이름`: 페이지별 코드

# PR 규칙

- feat\_페이지이름 `branch`에서 `dev`로 `merge` 요청보내기
- 팀원 전원 리뷰어 태그
- 팀원 두 명에게 `approve` 받아야 `merge` 가능
- PR 올린 후에는 디코 팀채널 및 단톡방에 메시지 남겨주기

# approve시 주의사항

- 팀원의 코드를 꼼꼼히 읽고, 문제가 없다고 판단될 시 `approve` 해주기
- 궁금증이나 의견있는 경우 PR comment에 먼저 남긴 후, 디코로 소통하기

# 기술 스택

- `react`
- `vite`
- `ESLint` & `Prettier` airbnb 스타일 상속
- `node.js`

## 라이브러리

- `axios`, `styledComponents`, `React Router DOM`
