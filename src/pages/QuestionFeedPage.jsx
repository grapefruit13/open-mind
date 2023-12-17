import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import FeedCardContainer from '../components/common/feedCard/FeedCardContainer';
import ButtonFloating from '../components/common/button/ButtonFloating';
import getData from '../utils/api';
import { SUBJECT_URL } from '../constants/apiUrl';

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

  useEffect(() => {
    const getUserData = async () => {
      const userData = await getData(`${SUBJECT_URL}1500/`);
      // console.log(userData);
      setUser(userData);
    };
    getUserData();
  }, []);

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
          <ButtonFloating large>질문 작성하기</ButtonFloating>
        </ButtonWrapper>
      </ContentsWrapper>
    </Container>
  );
}
