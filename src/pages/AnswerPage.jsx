import styled from 'styled-components';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import FeedCardContainer from '../components/common/feedCard/FeedCardContainer';
import Header from '../components/common/header/Header';
import ButtonFloating from '../components/common/button/ButtonFloating';
import { deleteAllQuestion } from '../utils/api';
import { QuestionsContext } from '../utils/contexts/QuestionsProvider';
import { UserContext } from '../utils/contexts/UserProvider';

const Container = styled.div`
  margin: auto;
  width: 71.6rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 3.2rem;
  }
  @media (max-width: 375px) {
    padding: 2.4rem;
  }
`;

const Div = styled.div`
  padding-bottom: 4.4rem;
`;

export default function AnswerPage() {
  const [allDeleteBtnClicked, setAllDeleteBtnClicked] = useState(false);
  const [deleteQuestionIds, setDeleteQuestionIds] = useState([]);

  const { user, handleUserData } = useContext(UserContext);
  const { handleQuestionsData } = useContext(QuestionsContext);

  const params = useParams();
  const subjectId = params.id;

  useEffect(() => {
    handleQuestionsData(subjectId);
    handleUserData(subjectId);
  }, []);

  useEffect(() => {
    handleUserData(subjectId);
  }, [handleUserData, subjectId]);

  const onClickDeleteButton = state => {
    setAllDeleteBtnClicked(state);
  };

  // 전체 삭제 버튼 클릭시 실행
  const handleDeleteAllQuestions = useCallback(async () => {
    try {
      await deleteAllQuestion('questions/', deleteQuestionIds);
    } catch (e) {
      throw Error(`Answerpage handleDeleteAllQuestion에서 ${e} 발생!`);
    }
    handleQuestionsData(subjectId);
  }, [deleteQuestionIds]);
  // }, [deleteQuestionIds, handleQuestionsData]);

  const handleAllDeleteBtnClikced = useCallback(() => {
    if (!allDeleteBtnClicked) return;
    handleDeleteAllQuestions();
  }, [allDeleteBtnClicked, handleDeleteAllQuestions]);

  const handleAllDeleteInput = state => {
    setDeleteQuestionIds(state);
  };

  useEffect(() => {
    handleAllDeleteBtnClikced();
  }, [allDeleteBtnClicked, handleAllDeleteBtnClikced]);

  return (
    <>
      <Header
        marginBottom="14rem"
        userName={user.name}
        userProfileImg={user.imageSource}
      />
      <Container>
        <Div>
          <ButtonFloating small onClickButton={onClickDeleteButton}>
            전체 삭제
          </ButtonFloating>
        </Div>
        {user && (
          <FeedCardContainer
            // user={user}
            allDeleteInput={handleAllDeleteInput}
            allDeleteBtnClicked={allDeleteBtnClicked}
          />
        )}
      </Container>
    </>
  );
}
