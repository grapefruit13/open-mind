import styled from 'styled-components';
import { useCallback, useEffect, useMemo, useState } from 'react';
import FeedCardContainer from '../components/common/feedCard/FeedCardContainer';
import Header from '../components/common/header/Header';
import ButtonFloating from '../components/common/button/ButtonFloating';
import getUserData, { getQuestionsData } from '../utils/api';
import { SUBJECT_URL } from '../constants/apiUrl';
import { QuestionsContext } from '../utils/context';

const Container = styled.div`
  margin: auto;
  width: 71.6rem;
`;

const Div = styled.div`
  padding-bottom: 4.4rem;
`;

// const userData = JSON.parse(localStorage.getItem('userData'));
// console.log(userData);

export default function AnswerPage() {
  const [data, setData] = useState({});
  const [questions, setQuestions] = useState([]);

  const handleGetQuestions = async () => {
    try {
      const response = await getUserData('/subjects/', '1377/');
      setData(prev => ({ ...prev, ...response }));
    } catch (e) {
      throw Error(`Answer page의 handleGetQuestions에서 ${e} 발생`);
    }
  };

  // 병화님 코드
  const getQuestions = useCallback(async () => {
    const questionsData = await getQuestionsData(
      `${SUBJECT_URL}${data.id}/questions/`,
    );
    setQuestions([...questionsData.results]);
  }, [data.id]);

  useEffect(() => {
    if (data.id !== undefined) {
      getQuestions();
    }
  }, [data.id, getQuestions]);

  const providerValue = useMemo(
    () => ({ questions, getQuestions }),
    [questions, getQuestions],
  );

  // ----

  // 전체 삭제 버튼 클릭됐는 지
  const [allDeleteBtnClicked, setAllDeleteBtnClicked] = useState(false);
  // 전체 삭제 버튼 클릭시 필요한 question id들 저장할 state
  const [deleteQuestionIds, setDeleteQuestionIds] = useState([]);

  // 전체 삭제 버튼에 question id들 저장할 state 전달
  const onClickBtn = state => {
    setAllDeleteBtnClicked(state);
  };

  // const handleDeleteAllQuestions = async () => {
  //   try {
  //     await deleteAllQuestion('questions/', deleteQuestionIds);
  //   } catch (e) {
  //     throw Error(`Answerpage handleDeleteAllQuestion에서 ${e} 발생!`);
  //   }
  // };

  // 질문 전체 삭제 (디버깅 필요)
  // const handleAllDeleteBtnClikced = () => {
  //   if (!allDeleteBtnClicked) return;
  //   console.log('전체삭제 clicked');
  //   console.log(deleteQuestionIds);
  //   handleDeleteAllQuestions();
  // };

  // feedcardContainer에서 delete할 questionId들 가져오기
  const handleDeleteQuestion = state => {
    setDeleteQuestionIds(state);
  // console.log('state', state);
  };

  // 디버깅 필요
  // useEffect(() => {
  //   handleAllDeleteBtnClikced();
  // }, [allDeleteBtnClicked]);

  useEffect(() => {
    handleGetQuestions();
  }, []);

  return (
    <QuestionsContext.Provider value={providerValue}>
      <Header
        marginBottom="14rem"
        userName={data && data.name}
        userProfileImg={data && data.imageSource}
      />
      <Container>
        <Div>
          <ButtonFloating small onClickInput={onClickBtn}>
            전체 삭제
          </ButtonFloating>
        </Div>
        {data && (
          <FeedCardContainer
            user={data}
            allDeleteInput={handleDeleteQuestion}
          />
        )}
      </Container>
    </QuestionsContext.Provider>
  );
}
