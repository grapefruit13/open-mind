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

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 3.2rem;
  }
  @media (max-width: 375px) {
    padding: 0 2.4rem;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  top: 5.8rem;
  left: 21.8rem;

  @media (min-width: 769px) {
    width: 20.8rem;
  }
  @media (max-width: 768px) {
    width: 12.3rem;
  }
`;

export default function QuestionFeedPage() {
  const [isOpenedModal, setIsOpendModal] = useState(false);

  const { user, handleUserData } = useContext(UserContext);
  const { handleQuestionsData } = useContext(QuestionsContext);

  const params = useParams();
  const subjectId = params.id;
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [buttonFloatingState, setButtonFloatingState] = useState(true);
  const handleSize = () => {
    setPageWidth(window.innerWidth);
  };

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

  useEffect(() => {
    window.addEventListener('resize', handleSize);
    if (pageWidth <= 768) {
      setButtonFloatingState(false);
    } else {
      setButtonFloatingState(true);
    }
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, [pageWidth]);

  return (
    <Container>
      <Header
        marginBottom="19.2rem"
        userName={user.name}
        userProfileImg={user.imageSource}
      />
      <ContentsWrapper>
        <FeedCardContainer />
        <ButtonWrapper onClick={() => setIsOpendModal(prev => !prev)}>
          {buttonFloatingState ? (
            <ButtonFloating>질문 작성하기</ButtonFloating>
          ) : (
            <ButtonFloating>질문 작성</ButtonFloating>
          )}
        </ButtonWrapper>
      </ContentsWrapper>
      {isOpenedModal && <Modal user={user} handleModal={handleModal} />}
    </Container>
  );
}
