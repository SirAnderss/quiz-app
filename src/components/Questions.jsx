import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QuestionState from '../context/questions/QuestionState';
import QuizList from './quiz/QuizList';

function Questions() {
  const { user } = useParams();
  const [quiz, setQuiz] = useState(false);
  const [theme, setTheme] = useState(0);
  const [difficulty, setDifficulty] = useState('');

  return (
    <QuestionState>
      <div>{user}</div>
      {!theme ? (
        <div>
          <div onClick={() => setTheme(15)}>Video Games</div>
          <div onClick={() => setTheme(18)}>Computing</div>
          <div onClick={() => setTheme(10)}>Books</div>
          <div onClick={() => setTheme(31)}>Manga and Anime</div>
          <div onClick={() => setTheme(23)}>History</div>
          <div onClick={() => setTheme(11)}>Movies</div>
        </div>
      ) : !quiz ? (
        <div>
          <div
            onClick={() => {
              setDifficulty('easy');
              setQuiz(true);
            }}
          >
            Easy
          </div>
          <div
            onClick={() => {
              setDifficulty('medium');
              setQuiz(true);
            }}
          >
            Medium
          </div>
          <div
            onClick={() => {
              setDifficulty('hard');
              setQuiz(true);
            }}
          >
            Hard
          </div>
        </div>
      ) : (
        <QuizList theme={theme} difficulty={difficulty} />
      )}
    </QuestionState>
  );
}

export default Questions;
