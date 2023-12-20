import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext, useMemo } from 'react';
import QuestionSection from './QuestionSection';
import AnswerStatusKebab from './AnswerStatusKebab';
import AnswerSection from './AnswerSection';
import Devider from './Devider';
import ReactionButtons from '../ReactionButtons';
import KebabDropdown from './KebabDropdown';
import { deleteQuestion, postAnswer, putAnswer } from '../../../utils/api';
import {
  // QuestionsContext,
  DropdownContext,
} from '../../../utils/contexts/context';
import { QuestionsContext } from '../../../utils/contexts/QuestionsProvider';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 68.4rem;
  padding: 3.2rem;
  border-radius: 16px;
  background: var(--grayscale-10);
  box-shadow: var(--shadow-1pt);
`;

export default function FeedCard({ question }) {
  const { pathname } = useLocation();
  const path = pathname.split('/')[3];
  const [isKebabClicked, setIsKebabClicked] = useState(false);
  const [clickedDropdown, setClickedDropdown] = useState({
    edited: false,
    deleted: false,
    rejected: false,
  });
  const [isCompleted, setIsCompleted] = useState({
    answerCompleted: false,
    editCompleted: false,
  });
  const [editMode, setEditMode] = useState(false);
  const [inputTextarea, setInputTextarea] = useState('');

  const { getQuestions } = useContext(QuestionsContext);

  const onClickKebab = state => {
    setIsKebabClicked(state);
  };

  const onClickComplete = state => {
    setIsCompleted(state);
  };

  // 답변 달기
  const handlePostAnswer = async () => {
    try {
      const result = await postAnswer(
        'questions/',
        question.id,
        inputTextarea,
        false,
      );
      getQuestions();
      console.log('답변 달기 결과(handlePostAnswer)', result);
    } catch (e) {
      throw Error(`AnswerSection의 postAnswers에서 ${e}발생`);
    }
  };

  // 답변 수정
  const handlePutAnswer = async () => {
    try {
      const result = await putAnswer(
        'answers/',
        question.answer.id,
        inputTextarea,
        false,
      );
      getQuestions();
      console.log(`답변 수정 결과(handlePutAnswer)`, result);
    } catch (e) {
      throw Error(`AnswerSection의 handlePutAnswer ${e}발생`);
    }
  };

  // 질문 삭제
  const handleDeleteQuestion = async () => {
    try {
      const result = await deleteQuestion('questions/', question.id);
      console.log('질문 삭제 결과(handleDeleteQuestion)', result);
      getQuestions();
    } catch (e) {
      throw Error(`AnswerSection의 postAnswers에서 ${e}발생`);
    }
  };

  // 답변 거절
  const handleReject = async () => {
    try {
      if (!question.answer) {
        const result = await postAnswer(
          'questions/',
          question.id,
          '답변 거절',
          true,
        );
        getQuestions();
        console.log(
          'handleReject postAnswer의 rejected 여부',
          result.isRejected,
        );
      } else {
        const result = await putAnswer(
          'answers/',
          question.answer.id,
          '답변 있는 상태에서 거절합니다.',
          true,
        );
        getQuestions();
        console.log(
          'handleReject putAnswer의 rejected 여부',
          result.isRejected,
        );
      }
    } catch (e) {
      throw Error(`handleReject postAnswers에서 ${e}발생`);
    }
  };

  // 드롭다운 수정하기, 삭제하기, 거절하기 처리
  const handleClickedDropdown = () => {
    if (clickedDropdown.edited) {
      setEditMode(true);
    } else if (clickedDropdown.deleted) {
      console.log('delete 요청 보내');
      handleDeleteQuestion();
    } else if (clickedDropdown.rejected) {
      console.log('rejected 수정하기 요청 보내');
      handleReject();
    }
  };

  // 답변 완료, 수정 완료 버튼 클릭시
  const handleIsCompleted = () => {
    if (isCompleted.answerCompleted) {
      console.log('답변 완료 됐으니 보내');
      handlePostAnswer();
    } else if (isCompleted.editCompleted) {
      console.log('수정 완료 됐으니 보내');
      handlePutAnswer();
      setEditMode(false);
    }
  };

  useEffect(() => {
    handleClickedDropdown();
  }, [clickedDropdown]);

  useEffect(() => {
    handleIsCompleted();
  }, [isCompleted]);

  const providerValue = useMemo(
    () => ({
      setClickedDropdown,
      inputTextarea,
      setInputTextarea,
      isCompleted,
    }),
    [setClickedDropdown, inputTextarea, setInputTextarea, isCompleted],
  );

  return (
    <DropdownContext.Provider value={providerValue}>
      <Container>
        <AnswerStatusKebab
          answer={question.answer}
          path={path}
          onClickKebab={onClickKebab}
        />
        {isKebabClicked && <KebabDropdown />}
        <QuestionSection questionContent={question.content} />
        {path !== 'answer' && !question.answer ? (
          ''
        ) : (
          <AnswerSection
            answer={question.answer}
            path={path}
            editMode={editMode}
            onClickComplete={onClickComplete}
          />
        )}
        <Devider />
        <ReactionButtons like={question.like} dislike={question.dislike} />
      </Container>
    </DropdownContext.Provider>
  );
}
