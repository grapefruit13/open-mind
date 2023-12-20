import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import FeedCardContainer from '../components/common/feedCard/FeedCardContainer';
import ButtonFloating from '../components/common/button/ButtonFloating';
import Modal from '../components/questionFeed/Modal';
import { UserContext } from '../utils/contexts/UserProvider';
import { QuestionsContext } from '../utils/contexts/QuestionsProvider';

const Container = styled.div`
  width: 100%;
`;

const ContentsWrapper = styled.div`
  width: fit-content;
  margin: 0 auto 13.6rem;
`;

const ButtonWrapper = styled.div`
  position: relative;
  top: 5.8rem;
  left: 21.8rem;
`;

export default function QuestionFeedPage() {
  const [isOpenedModal, setIsOpendModal] = useState(false);

  const { user, handleUserData } = useContext(UserContext);
  const { handleQuestionsData } = useContext(QuestionsContext);

  const params = useParams();
  const subjectId = params.id;

  useEffect(() => {
    handleQuestionsData(subjectId);
  }, []);

  useEffect(() => {
    handleUserData(subjectId);
    // }, [handleUserData, subjectId]);
  }, []);

  const handleModal = () => {
    setIsOpendModal(prev => !prev);
  };

  // const getQuestions = useCallback(async () => {
  //   const questionsData = await getQuestionsData(
  //     `${SUBJECT_URL}${user.id}/questions/`,
  //   );
  //   setQuestions([...questionsData.results]);
  // }, [user.id]);

  // useEffect(() => {
  //   if (user.id !== undefined) {
  //     getQuestions();
  //   }
  // }, [user.id, getQuestions]);

  // const providerValue = useMemo(
  //   () => ({ questions, getQuestions }),
  //   [questions, getQuestions],
  // );

  return (
    // <QuestionsContext.Provider value={providerValue}>
    <Container>
      <Header
        marginBottom="19.2rem"
        userName={user.name}
        userProfileImg={user.imageSource}
      />
      <ContentsWrapper>
        <FeedCardContainer />
        <ButtonWrapper onClick={() => setIsOpendModal(prev => !prev)}>
          <ButtonFloating large>질문 작성하기</ButtonFloating>
        </ButtonWrapper>
      </ContentsWrapper>
      {isOpenedModal && <Modal user={user} handleModal={handleModal} />}
    </Container>
    // </QuestionsContext.Provider>
  );
}
