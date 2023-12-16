import { useEffect, useState } from 'react';
import styled from 'styled-components';
import FeedCard from './FeedCard';
import Message from '../../../assets/svgComponents/Message';
import { getQuestionsData } from '../../../utils/api';
import { SUBJECT_URL } from '../../../constants/apiUrl';

const Container = styled.div`
  display: inline-flex;
  padding: 1.6rem;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  border-radius: 1.6rem;
  border: 1px solid var(--brown-30);
  background: var(--brown-10);
`;

const CountQuestion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  color: var(--brown-40);
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

export default function FeedCardContainer({ user }) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getQuestions = async () => {
      const questionsData = await getQuestionsData(
        `${SUBJECT_URL}1455/questions/`,
      );
      setQuestions([...questionsData.results]);
    };
    getQuestions();
  }, []);

  // useEffect(() => {
  //   console.log(questions);
  // }, [questions]);

  return (
    <Container>
      {questions.length > 0 ? (
        <>
          <CountQuestion>
            <Message size="24px" />
            <span>{questions.length}개의 질문이 있습니다.</span>
          </CountQuestion>
          {questions.map(question => {
            return (
              <FeedCard key={question.id} question={question} user={user} />
            );
          })}
        </>
      ) : (
        <>
          <CountQuestion>
            <Message size="24px" />
            <span>아직 질문이 없습니다.</span>
          </CountQuestion>
          <div>empty box</div>
        </>
      )}
    </Container>
  );
}
