import styled from 'styled-components';
import QuestionSection from './QuestionSection';
import AnswerStatusKebab from './AnswerStatusKebab';
import AnswerSection from './AnswerSection';
import Devider from './Devider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 68.4rem;
  padding: 3.2rem;
  border-radius: 16px;
  background: var(--grayscale-10);
  box-shadow: var(--shadow-1pt);
`;

export default function FeedCard() {
  return (
    <Container>
      <AnswerStatusKebab />
      <QuestionSection />
      <AnswerSection />
      <Devider />
      <div>좋아요</div>
    </Container>
  );
}
