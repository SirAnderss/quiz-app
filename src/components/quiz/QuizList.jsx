import React, { useEffect, useContext } from 'react';
import QuestionContext from '../../context/questions/QuestionContext';

function QuizList({ theme, difficulty }) {
  const { questions, getQuestions } = useContext(QuestionContext);

  useEffect(() => {
    getQuestions(theme, difficulty);
  }, []);

  return <div>Quiz list</div>;
}

export default QuizList;
