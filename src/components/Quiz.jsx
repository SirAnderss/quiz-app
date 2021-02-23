import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import QuestionState from '../context/questions/QuestionState';
import QuizList from './quiz/QuizList';

function Quiz() {
  const localUser = localStorage.getItem('user');

  const { user } = useParams();

  return (
    <>
      {localUser ? (
        <QuestionState>
          <QuizList user={user} />
        </QuestionState>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}

export default Quiz;
