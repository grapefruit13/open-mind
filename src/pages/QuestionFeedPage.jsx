import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import FeedCardContainer from '../components/common/feedCard/FeedCardContainer';
import ButtonFloating from '../components/common/button/ButtonFloating';
import getData from '../utils/api';
import { SUBJECT_URL } from '../constants/apiUrl';
import Modal from '../components/questionFeed/Modal';

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
  const [user, setUser] = useState({});
  const [isOpenedModal, setIsOpendModal] = useState(true);

  const getUserData = async () => {
    const userData = await getData(`${SUBJECT_URL}1501/`);
    // console.log(userData);
    setUser(userData);
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handleModal = () => {
    setIsOpendModal(prev => !prev);
    console.log('click');
  };

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  return (
    <Container>
      <Header
        marginBottom="19.2rem"
        userName={user.name}
        userProfileImg={user.imageSource}
      />
      <ContentsWrapper>
        <FeedCardContainer user={user} />
        <ButtonWrapper>
          <ButtonFloating large onClick={handleModal}>
            질문 작성하기
          </ButtonFloating>
        </ButtonWrapper>
      </ContentsWrapper>
      {isOpenedModal && <Modal user={user} />}
    </Container>
  );
}
