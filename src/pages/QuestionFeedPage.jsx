import styled from 'styled-components';
import Header from '../components/common/header/Header';
import FeedCardContainer from '../components/common/feedCard/FeedCardContainer';
import ButtonFloating from '../components/common/button/ButtonFloating';

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
  return (
    <Container>
      <Header marginBottom="19.2rem" />
      <ContentsWrapper>
        <FeedCardContainer />
        <ButtonWrapper>
          <ButtonFloating large>질문 작성하기</ButtonFloating>
        </ButtonWrapper>
      </ContentsWrapper>
    </Container>
  );
}
