import React from "react";
//types

import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCard.styles";

type props = {
  question: string;
  answer: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <Wrapper>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answer.map((ans) => (
        <ButtonWrapper
          key={ans}
          correct={userAnswer?.correctAnswer === ans}
          userClicked={userAnswer?.answer === ans}
        >
          <button
            disabled={userAnswer ? true : false}
            value={ans}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: ans }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </Wrapper>
);
export default QuestionCard;
