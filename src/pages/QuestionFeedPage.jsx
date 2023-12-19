import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import FeedCardContainer from '../components/common/feedCard/FeedCardContainer';
import ButtonFloating from '../components/common/button/ButtonFloating';
// import { getQuestionsData } from '../utils/api';
// import { SUBJECT_URL } from '../utils/constants/apiUrl';
import Modal from '../components/questionFeed/Modal';
// import { QuestionsContext } from '../utils/contexts/context';
import { UserContext } from '../utils/contexts/user';
import { QuestionsContext } from '../utils/contexts/questions';

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
  // const [user, setUser] = useState({});
  const [isOpenedModal, setIsOpendModal] = useState(false);
  // const [questions, setQuestions] = useState([]);

  const { user, handleUserData } = useContext(UserContext);
  const { questions, handleQuestionsData } = useContext(QuestionsContext);
  console.log(user); // 여기서는 잘 동작하나, 하위는 parasm로 인해 정상 동작 안 함(ex.AnswerSection.jsx)
  console.log(questions); // 정적이기 때문에 하위에서도 잘 동작함.

  const params = useParams();
  const subjectId = params.id;

  useEffect(() => {
    handleQuestionsData(subjectId);
  }, []);

  useEffect(() => {
    handleUserData(subjectId);
  }, [handleUserData, subjectId]);

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
