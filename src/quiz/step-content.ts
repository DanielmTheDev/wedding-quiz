export interface StepContent {
  imagePath: string;
  title: string;
  question: string;
  answers: Answer[];
  isFinalAnswer: boolean;
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}
