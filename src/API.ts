import { shuffleArray } from "./utis";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Diffculty {
  EASY = "easy",
  MEDUIM = "meduim",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  diffculty: Diffculty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${diffculty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
