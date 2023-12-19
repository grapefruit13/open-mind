import { useContext } from 'react';
import styled from 'styled-components';
import FeedCard from './FeedCard';
import Message from '../../../assets/svgComponents/Message';
import NoQuestionBox from '../../questionFeed/NoQuestionBox';
import { QuestionsContext } from '../../../utils/contexts/context';

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

export default function FeedCardContainer() {
  const { questions } = useContext(QuestionsContext);
  // const [data, setData] = useState({});

  // const handleGetQuestions = async () => {
  //   try {
  //     const response = await getQuestions('1377');
  //     console.log(response, 'response');
  //     setData(response);
  //   } catch (e) {
  //     throw Error(`Answer page의 handleGetQuestions에서 ${e} 발생`);
  //   }
  // };

  // 화면 렌더링 될 때마다 questionId들을 배열로 저장해서 answerPage에 전달
  // const handleAllDelete = () => {
  //   console.log(`handleAllDelete`);
  //   console.log(questions); // 처음 로딩시 null 출력됨
  //   if (!questions) return;
  //   const questionIds = questions.map(result => result.id);
  //   allDeleteInput(questionIds);
  //   console.log('questionIds', questionIds);
  // };

  // useEffect(() => {
  //   console.log('FeedCardContainer 랜더링');
  // }, []);

  return (
    <>
      {/* {data.results ? ( */}
      {questions.length ? (
        <Container>
          <CountQuestion>
            <Message size="2.4rem" color="#542F1A" />
            <span>{questions.length}개의 질문이 있습니다.</span>
          </CountQuestion>
          {questions.map(question => {
            return <FeedCard key={question.id} question={question} />;
          })}
        </Container>
      ) : (
        <NoQuestionBox />
      )}
    </>
  );
}
