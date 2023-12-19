import React, { useState, useCallback, useMemo } from 'react';
import { getQuestionsData } from '../api';
import { SUBJECT_URL } from '../constants/apiUrl';

export const QuestionsContext = React.createContext();

export default function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([]);

  const handleQuestionsData = useCallback(async subjectId => {
    try {
      const questionsData = await getQuestionsData(
        `${SUBJECT_URL}${subjectId}/questions/`,
      );
      setQuestions([...questionsData.results]);
    } catch (error) {
      throw Error(error);
    }
  }, []);

  const providerValue = useMemo(
    () => ({ questions, handleQuestionsData }),
    [questions, handleQuestionsData],
  );
  return (
    <QuestionsContext.Provider value={providerValue}>
      {children}
    </QuestionsContext.Provider>
  );
}
