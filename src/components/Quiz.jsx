import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionState from '../context/questions/QuestionState';
import QuizList from './quiz/QuizList';

function Quiz() {
  const { user } = useParams();

  return (
    <QuestionState>
      <QuizList user={user} />
    </QuestionState>
  );
}

export default Quiz;
