import styled from 'styled-components';
import { useCallback, useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FeedCardContainer from '../components/common/feedCard/FeedCardContainer';
import Header from '../components/common/header/Header';
import ButtonFloating from '../components/common/button/ButtonFloating';
import ToastPortal from '../components/common/ToastPortal';
import Toast from '../components/common/Toast';
import { deleteAllQuestion } from '../utils/api';
import { QuestionsContext } from '../utils/contexts/QuestionsProvider';
import { UserContext } from '../utils/contexts/UserProvider';
import { ShareButtonContext } from '../utils/contexts/ShareButtonProvider';

const Container = styled.div`
  margin: auto;
  width: 71.6rem;
  padding: 5.4rem 0 5.8rem;

  @media (max-width: 768px) and (min-width: 1200px) {
    width: 100%;
    padding: 5.4rem 3.2rem 5.8rem;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding: 5.4rem 2.4rem 4.8rem;
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
  const { shareButtonClicked } = useContext(ShareButtonContext);

  const params = useParams();
  const subjectId = params.id;

  const navigate = useNavigate();

  useEffect(() => {
    const loginedUser = JSON.parse(localStorage.getItem('userData'));

    if (loginedUser) {
      if (subjectId !== loginedUser.id.toString()) {
        navigate(`/post/${subjectId}/`);
      }
    }

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
            allDeleteInput={handleAllDeleteInput}
            allDeleteBtnClicked={allDeleteBtnClicked}
          />
        )}
        {shareButtonClicked && (
          <ToastPortal>
            <Toast />
          </ToastPortal>
        )}
      </Container>
    </>
  );
}
