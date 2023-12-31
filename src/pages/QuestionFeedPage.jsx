import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import FeedCardContainer from '../components/common/feedCard/FeedCardContainer';
import ButtonFloating from '../components/common/button/ButtonFloating';
import Modal from '../components/questionFeed/Modal';
import { UserContext } from '../utils/contexts/UserProvider';
import { QuestionsContext } from '../utils/contexts/QuestionsProvider';
import ToastPortal from '../components/common/ToastPortal';
import Toast from '../components/common/Toast';
import { ShareButtonContext } from '../utils/contexts/ShareButtonProvider';

const Container = styled.div`
  width: 100%;
`;

const ContentsWrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: 0 auto 13.6rem;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 376px) and (max-width: 767px) {
    padding: 0 3.2rem 0;
  }
  @media (max-width: 375px) {
    padding: 0 2.4rem 0;
  }
`;

const ButtonWrapper = styled.div`
  width: 20.8rem;
  height: 5.4rem;
  position: absolute;
  right: -21.8rem;
  bottom: -10.6rem;

  @media (min-width: 768px) and (max-width: 1119px) {
    right: 0;
  }

  @media (max-width: 767px) {
    width: 12.3rem;
    right: 0;
    bottom: -9.6rem;
    margin: 0 3.2rem;
  }
`;

export default function QuestionFeedPage() {
  const [isOpenedModal, setIsOpendModal] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [buttonFloatingState, setButtonFloatingState] = useState(true);

  const { user, handleUserData } = useContext(UserContext);
  const { handleQuestionsData } = useContext(QuestionsContext);
  const { shareButtonClicked } = useContext(ShareButtonContext);

  const params = useParams();
  const subjectId = params.id;

  const navigate = useNavigate();

  const handleSize = () => {
    setPageWidth(window.innerWidth);
  };

  const handleModal = () => {
    setIsOpendModal(prev => !prev);
  };

  useEffect(() => {
    const loginedUser = JSON.parse(localStorage.getItem('userData'));

    if (loginedUser) {
      if (subjectId === loginedUser.id.toString()) {
        navigate(`/post/${subjectId}/answer`);
      }
    }

    handleUserData(subjectId);
    handleQuestionsData(subjectId);
  }, []);

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
            <ButtonFloating feed>질문 작성하기</ButtonFloating>
          ) : (
            <ButtonFloating feed>질문 작성</ButtonFloating>
          )}
        </ButtonWrapper>
      </ContentsWrapper>
      {isOpenedModal && <Modal user={user} handleModal={handleModal} />}
      {shareButtonClicked && (
        <ToastPortal>
          <Toast />
        </ToastPortal>
      )}
    </Container>
  );
}
