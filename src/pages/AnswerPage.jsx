import styled from 'styled-components';
import FeedCardContainer from '../components/common/feedCard/FeedCardContainer';
import Header from '../components/common/header/Header';
import ButtonFloating from '../components/common/button/ButtonFloating';

const Container = styled.div`
  margin: auto;
  width: 71.6rem;
`;

const userData = JSON.parse(localStorage.getItem('userData'));
// console.log(userData);

export default function AnswerPage() {
  return (
    <>
      <Header
        userName={userData.name}
        userProfileImg={userData.imageSource}
        marginBottom="14rem"
      />
      <Container>
        <ButtonFloating small>삭제하기</ButtonFloating>
        <FeedCardContainer user={userData} />
      </Container>
    </>
  );
}
