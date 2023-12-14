import styled from 'styled-components';
import DatesAgo from './DatesAgo';
import QuestionText from './QuestionText';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`;

export default function QuestionSection() {
  return (
    <Container>
      <DatesAgo text="질문 · 2주전" />
      <QuestionText text="좋아하는 동물은???" />
    </Container>
  );
}
