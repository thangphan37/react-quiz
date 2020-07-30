import React from "react";
import { AnswerObject } from '../App';

type Props = {
  question: string,
  totalQuestion: number,
  callback: any,
  userAnswer: AnswerObject | undefined,
  answers: string[]
  questionNumber: number
};

export const QuestionCard: React.FC<Props> = ({
    question,
    totalQuestion,
    userAnswer,
    callback,
    answers,
    questionNumber
    }) => {
  return (
    <div>
      <p>Question: {questionNumber} / {totalQuestion}</p>
      {
      answers.map((answer) => (
        <button key={answer} onClick={callback} disabled={userAnswer ? true : false}>{answer}</button>
            ))
      }
    </div>
  );
};
