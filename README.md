# Open mind
### **서로 질문과 답변을 하며 마음을 나눌 수 있는 소통 플랫폼**

질문을 받을 수 있는 피드 페이지를 생성하면 다른 사람들이 질문을 남길 수 있습니다.

본인의 피드에 남겨진 질문에 대답할 수도, 대답을 거절할 수도 있습니다.

서로에게 궁금한 점을 물어보며 마음을 나누어 보세요.

🎮 https://open-mind-git-main-lims-projects-d8b8d2eb.vercel.app/

<br>

# 팀원 소개
#### 
|허우림|김동규|김병화|이채빈|정다희|
|------|---|---|---|---|

#### 허우림
- 각 질문 카드별로 답변 작성/수정/삭제/거절 기능 구현 -> axios GET/POST/DELETE/PUT 요청
- 답변 달기 페이지 UI 및 질문 전체 삭제 기능 -> 질문별 id를 배열에 담아서 map으로 DELETE 요청(질문 전체 삭제 api가 없는 관계로)
- 링크 공유하기 버튼 클릭시 클립보드에 현재 주소 복사 및 create portal을 활용한 토스트 팝업 기능 구현
- AnswerPage, FeedCardContainer, FeedCard 등 질문/답변 카드의 하위 컴포넌트 구현
- ShareButton provider를 사용하여 공유하기 버튼의 clicked 상태 관리
- 질문/답변 날짜 계산 기능 구현

#### 김동규
- 페이지네이션, 드롭다운, 로그아웃 컴포넌트 제작
- 리스트 페이지 제작

#### 김병화
- 버튼 컴포넌트 제작(varient를 활용한 재사용성 확보)
- 좋아요/싫어요 기능
- 로그인 기능 및 로그인 여부에 따른 re-route
- ContextAPI 모듈화 적용 - UserProvider, QuestionsProvider
- 질문 Feed Page 전반

#### 이채빈

#### 정다희
- 뱃지, 토스트 컴포넌트 제작
- HomepPage 제작
- 반응형 구현, css 전반 수정

<br>

# 사용기술
#### 언어 및 프레임워크
JS & React.js

#### 빌드 및 배포
vite ^5.0.0 
vercel

#### CSS
styled-components ^6.1.1

#### 상태 관리
ContextAPI

#### 코드 일관성 유지
prettier/eslint extends airbnb

#### 라이브러리
createPortal, react-router-dom ^6.20.1, axios ^1.6.2

<br>

# 디렉토리 구조

```jsx
src
|- assets/svgComponents
|- components 
	|- answer : answer이라는 한 페이지에만 들어가는 컴포넌트
	|- badge
	|- common : 두 개이상의 페이지에 들어가는 컴포넌트
	|- home
	|- list
	|- questionFeed
|- hooks
|- pages : 컴포넌트들을 합친 페이지 컴포넌트
|- utils
	|- constants
	|- contexts
```
<br>

# 구현 기능
- 홈 페이지
    - 로그인(localStroage)
- 질문 목록 페이지
    - Pagination
- 질문 피드 페이지
    - 질문 조회
    - 좋아요/싫어요
    - 질문 작성
- 답변하기 페이지
    - 답변 작성/거절/수정/삭제
    - 전체 삭제
- Toast
- 로그아웃, 로그인 여부에 따른 페이지 별 접근 가능 여부 설정

<br>

# 핵심 기능 및 문제해결 방법

## 1. ContextProvider 모듈화

프로젝트 특성 상 여러 페이지에서 user 데이터를 사용했어야 했다.

한 페이지 내에서도 porops drilling이 발생했었는데 이를 위해 ContextAPI를 도입하였다.

```jsx
import React, { useState, useMemo, useCallback } from 'react';
import getUserData from '../api';
import { SUBJECT_URL } from '../constants/apiUrl';

export const UserContext = React.createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const handleUserData = useCallback(async subjectId => {
    try {
      const userData = await getUserData(SUBJECT_URL, `${subjectId}/`);
      setUser(userData);
    } catch (error) {
      throw Error(error);
    }
  }, []);

  const providerValue = useMemo(
    () => ({ user, handleUserData }),
    [user, handleUserData],
  );

  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
}
```

UserProvider에서는 value를 user와 handleUserData로 설정하여 

user에 대한 정보와 user를 받아오는 함수를 어디서든 사용할 수 있도록 하였다.

위에서 제작한 UserProvider를 App 컴포넌트에서 사용해주고

```jsx
export default function App() {
  return (
    <>
      <GlobalStyle />
      <UserProvider>
        <BrowserRouter>
					...  
        </BrowserRouter>
      </UserProvider>
    </>
  );
}
```

사용하고 싶은 페이지에서 UserContext를  import하면 어디서든 Context value를 사용할 수 있다.

## 2. 페이지네이션 기능 구현

리스트 데이터의 총 답변자 수인 count 값을 불러와 총 페이지 수를 계산해 totalPage에 set 해준다.

```jsx
useEffect(() => {
    const getListData = async (limit, offset, sort) => {
      const cardListData = await getDataByLimit(limit, offset, sort);
      setList({ ...cardListData });
      setTotalPage(Math.ceil(cardListData.count / limit));
    };
    getListData(width, (page - 1) * width, selectedMenuState);
  }, [selectedMenuState, page, width, currentPageBlock]);
```

props로 페이지 관련 값을 내려줘 최대 보여줄 페이지 갯수 만큼 잘라서 나타낼 숫자를 계산하고 

누를 시 그 페이지로 이동 시키는 함수를 추가하였다.

```jsx
function Pagenation({currentPageBlock, totalPageBlock, totalPage, setPage, page}) {
  const [arrayNum, setArrayNum] = useState(0);

  useEffect(() => {
    if (currentPageBlock === totalPageBlock - 1) {
      if (totalPage % 5 === 0) {
        setArrayNum(5);
      } else {
        setArrayNum(totalPage % 5);
      }
    } else {
      setArrayNum(5);
    }
  }, [currentPageBlock, totalPage, totalPageBlock]);

  return (
    <>
      {new Array(arrayNum).fill().map((_, index) => (
        <Nums
          $active={page === currentPageBlock * 5 + index + 1}
          key={`${index}-pagenums`}
          onClick={() => setPage(currentPageBlock * 5 + index + 1)}
        >
          {currentPageBlock * 5 + index + 1}
        </Nums>
      ))}
    </>
  );
}
```

마지막으로 화살표를 누를 시 페이지 계산을 해서 페이지 블록 이동과 첫번째와 마지막 페이지로 이동하는 함수를 실행시키도록 하였다.

# 기타 사항

### 커밋 규칙

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

### 커밋 단위

컴포넌트 -> 함수 단위

<br>
