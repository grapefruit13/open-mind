import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import QuestionSection from './QuestionSection';
import AnswerStatusKebab from './AnswerStatusKebab';
import AnswerSection from './AnswerSection';
import Devider from './Devider';
import ReactionButtons from '../ReactionButtons';
import KebabDropdown from './KebabDropdown';
import { deleteQuestion, postAnswer, putAnswer } from '../../../utils/api';
import FeedCardContext from '../../../utils/contexts/FeedCardProvider';
import calCreatedAt from '../../../utils/calCreatedDate';
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
  const [questionDatesAgo, setQuestionDatesAgo] = useState('');
  const [answerDatesAgo, setAnswerDatesAgo] = useState('');
  const { handleQuestionsData } = useContext(QuestionsContext);

  const handleCalCreatedAt = useCallback(() => {
    if (!question.createdAt) return;
    setQuestionDatesAgo(calCreatedAt(question.createdAt));
    if (!question.answer) return;
    setAnswerDatesAgo(calCreatedAt(question.answer?.createdAt));
  }, [
    question.createdAt,
    question.answer,
    setQuestionDatesAgo,
    setAnswerDatesAgo,
  ]);

  const onClickKebab = state => {
    setIsKebabClicked(state);
  };

  const onClickComplete = state => {
    setIsCompleted(state);
  };

  const feedcardProviderValue = useMemo(
    () => ({
      setClickedDropdown,
      setIsCompleted,
      isCompleted,
      inputTextarea,
      setInputTextarea,
    }),
    [
      setClickedDropdown,
      setIsCompleted,
      isCompleted,
      inputTextarea,
      setInputTextarea,
    ],
  );

  // 답변 달기
  const handlePostAnswer = useCallback(async () => {
    try {
      await postAnswer('questions/', question.id, inputTextarea, false);
      handleQuestionsData(question.subjectId);
    } catch (e) {
      throw new Error(`AnswerSection의 postAnswers에서 ${e}발생`);
    }
  }, [question.id, inputTextarea, handleQuestionsData]);

  // 답변 수정
  const handlePutAnswer = useCallback(async () => {
    try {
      const result = await putAnswer(
        'answers/',
        question.answer.id,
        inputTextarea,
        false,
      );
      handleQuestionsData(question.subjectId);
      setClickedDropdown({ edited: false });
    } catch (e) {
      throw new Error(`AnswerSection의 handlePutAnswer ${e}발생`);
    }
  }, [question.answer?.id, inputTextarea, handleQuestionsData]);

  // 질문 삭제
  const handleDeleteQuestion = useCallback(async () => {
    try {
      await deleteQuestion('questions/', question.id);
      handleQuestionsData(question.subjectId);
    } catch (e) {
      throw new Error(`AnswerSection의 postAnswers에서 ${e}발생`);
    }
  }, [question.id, handleQuestionsData]);

  // 답변 거절
  const handleReject = useCallback(async () => {
    try {
      if (!question.answer) {
        await postAnswer('questions/', question.id, '답변 거절', true);
        handleQuestionsData(question.subjectId);
      } else {
        await putAnswer(
          'answers/',
          question.answer.id,
          '답변 있는 상태에서 거절합니다.',
          true,
        );
        handleQuestionsData(question.subjectId);
      }
    } catch (e) {
      throw new Error(`handleReject postAnswers에서 ${e}발생`);
    }
  }, [question.answer, question.subjectId]);

  const handleClickedDropdown = useCallback(() => {
    if (clickedDropdown.edited) {
      setEditMode(true);
    } else if (clickedDropdown.deleted) {
      setEditMode(false);
      handleDeleteQuestion();
    } else if (clickedDropdown.rejected) {
      setEditMode(false);
      handleReject();
    }
    setIsKebabClicked(false);
  }, [clickedDropdown, setEditMode, handleDeleteQuestion]);

  const handleIsCompleted = useCallback(() => {
    if (isCompleted.answerCompleted) {
      handlePostAnswer();
    } else if (isCompleted.editCompleted) {
      handlePutAnswer();
      setEditMode(false);
    }
  }, [
    isCompleted.answerCompleted,
    isCompleted.editCompleted,
    handlePostAnswer,
    handlePutAnswer,
  ]);

  useEffect(() => {
    handleCalCreatedAt();
  }, [question.createdAt, handleCalCreatedAt]);

  useEffect(() => {
    if (isCompleted.answerCompleted || isCompleted.editCompleted) {
      setIsCompleted({
        answerCompleted: false,
        editCompleted: false,
      });
    }
  }, [isCompleted.answerCompleted, isCompleted.editCompleted, setIsCompleted]);

  useEffect(() => {
    handleClickedDropdown();
  }, [clickedDropdown, handleClickedDropdown]);

  useEffect(() => {
    handleIsCompleted();
  }, [isCompleted, handleIsCompleted]);

  return (
    <FeedCardContext.Provider value={feedcardProviderValue}>
      <Container>
        <AnswerStatusKebab
          answer={question.answer}
          path={path}
          onClickKebab={onClickKebab}
        />
        {isKebabClicked && <KebabDropdown question={question} />}
        <QuestionSection
          questionContent={question.content}
          datesAgo={questionDatesAgo}
        />
        {path !== 'answer' && !question.answer ? (
          ''
        ) : (
          <AnswerSection
            answer={question.answer}
            path={path}
            editMode={editMode}
            onClickComplete={onClickComplete}
            datesAgo={answerDatesAgo}
          />
        )}
        <Devider />
        <ReactionButtons like={question.like} dislike={question.dislike} />
      </Container>
    </FeedCardContext.Provider>
  );
}
