export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export type Question = {
  category: string;
  correct_answer: string;
  question: string;
  type: string;
  incorrect_answers: string[];
};

export type QuestionState = Question & {
  answers: string[];
};

export const fetchQuizQuestions = async (
  amount: number,
  difficulty: Difficulty
): Promise<QuestionState[]> => {
  const link = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(link)).json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: [...question.incorrect_answers, question.correct_answer]
  }));
};
