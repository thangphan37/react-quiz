import React from "react";
import { AnswerObject } from '../App';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

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
    <Wrapper>
      <p>Question: {questionNumber} / {totalQuestion}</p>
      {
      answers.map((answer) => (
        <ButtonWrapper key={answer} onClick={callback} >{answer}</ButtonWrapper>
            ))
      }
    </Wrapper>
  );
};
