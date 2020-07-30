import React, { useState } from "react";
import { fetchQuizQuestions, Difficulty, QuestionState } from "./API";
import { QuestionCard } from "./components/QuestionCard";
import { GlobalStyle, Card } from "./App.styles";

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  answer: string;
  question:string; 
  correct: boolean;
  correct_answer: string; 
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const startGame = async () => {
    setGameOver(false);
    setLoading(true);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestions);
    setLoading(false);
    setUserAnswers([]);
    setScore(0);
    setNumber(0);
  };

  const chooseAnswer = (e: any) => {
      const answer = e.currentTarget.textContent;
      const correct_answer = questions[number].correct_answer;
      const correct = answer === correct_answer;
    
      if(correct) {
        setScore(prev => prev+1);
      }

      const answerObject = {
        answer,
        question: questions[number].question,
        correct,
        correct_answer 
      };

      setUserAnswers(prev => [...prev, answerObject]);
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    if(nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }

  };

  return (
    <Card>
      <GlobalStyle/>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startGame}>Start</button>
      <p className="score">Score:{score}</p>
      {loading && <p>Loading questions...</p>}
      {!loading && !gameOver && 
      <QuestionCard 
        question={questions[number].question}
        totalQuestion={TOTAL_QUESTIONS}
        callback={chooseAnswer}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        answers={questions[number].answers}
        questionNumber={number+1}
      />
      }

      {!loading && !gameOver && number+1 !== TOTAL_QUESTIONS &&
      <button className="next" onClick={nextQuestion}>Next</button>
}

    </Card>
  );
};

export default App;
