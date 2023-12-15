import styled from 'styled-components';
import message from '../../../public/assets/icon/messages.svg';
import emptyBox from '../../../public/assets/emptyBox.svg';

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

  @media (min-width: 376px) and (max-width: 768px) {
    width: 70.4rem;
  }

  @media (max-width: 375px) {
    width: 32.7rem;
    gap: 6.6rem;
  }
`;

const Flex = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const MessageImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  @media (max-width: 375px) {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

const TextContainer = styled.p`
  color: var(--Brown-40, #542f1a);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  @media (max-width: 375px) {
    font-size: 1.8rem;
  }
`;

const EmptyBoxImg = styled.img`
  width: 15rem;
  height: 15.4rem;

  @media (max-width: 375px) {
    width: 11.4rem;
    height: 11.8rem;
  }
`;

function NoQuestionBox() {
  return (
    <Container>
      <Flex>
        <MessageImg src={message} />
        <TextContainer>아직 질문이 없습니다</TextContainer>
      </Flex>
      <EmptyBoxImg src={emptyBox} />
    </Container>
  );
}

export default NoQuestionBox;
