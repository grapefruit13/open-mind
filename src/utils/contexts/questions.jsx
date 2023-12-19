import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { getQuestionsData } from '../api';
import { SUBJECT_URL } from '../constants/apiUrl';

const QuestionsContext = React.createContext();

function QuestionsProvider() {
  const [questions, setQuestions] = useState([]);

  const getQuestions = useCallback(async () => {
    const questionsData = await getQuestionsData(
      `${SUBJECT_URL}${user.id}/questions/`,
    );
    setQuestions([...questionsData.results]);
  }, [user.id]);

  useEffect(() => {
    if (user.id !== undefined) {
      getQuestions();
    }
  }, [user.id, getQuestions]);

  const providerValue = useMemo(
    () => ({ questions, getQuestions }),
    [questions, getQuestions],
  );
  return (
    <QuestionsContext.Provider
      value={providerValue}
    ></QuestionsContext.Provider>
  );
}

export default QuestionsProvider;
