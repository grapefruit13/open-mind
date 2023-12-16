import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import QuestionSection from './QuestionSection';
import AnswerStatusKebab from './AnswerStatusKebab';
import AnswerSection from './AnswerSection';
import Devider from './Devider';
import ReactionButtons from '../ReactionButtons';
// import EditContentsButton from '../../answer/EditContentsButton';

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

export default function FeedCard({ question, user }) {
  const { pathname } = useLocation();
  const path = pathname.split('/')[3];

  return (
    <Container>
      <AnswerStatusKebab answer={question.answer} path={path} />
      <QuestionSection questionContent={question.content} />
      {path !== 'answer' && !question.answer ? (
        ''
      ) : (
        <AnswerSection answer={question.answer} user={user} path={path} />
      )}
      <Devider />
      <ReactionButtons like={question.like} dislike={question.dislike} />
      {/* <EditContentsButton /> */}
    </Container>
  );
}
