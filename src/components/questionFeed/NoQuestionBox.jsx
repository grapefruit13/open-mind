import styled from 'styled-components';
import Message from '../../assets/svgComponents/Message';
import EmptyBox from '../../assets/svgComponents/EmptyBox';

const Container = styled.div`
  width: 71.6rem;
  height: 33rem;
  padding: 1.6rem 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7rem;
  border-radius: 16px;
  border: 1px solid var(--Brown-20, #e4d5c9);
  background: var(--Brown-10, #f5f1ee);

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 375px) {
    gap: 6.6rem;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const TextContainer = styled.p`
  color: var(--Brown-40, #542f1a);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 375px) {
    font-size: 1.8rem;
  }
`;

function NoQuestionBox() {
  return (
    <Container>
      <Flex>
        <Message size="2.4rem" color="#542F1A" />
        <TextContainer>아직 질문이 없습니다</TextContainer>
      </Flex>
      <EmptyBox />
    </Container>
  );
}

export default NoQuestionBox;
