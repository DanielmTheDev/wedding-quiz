export interface StepContent {
  imagePath: string;
  title: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  text: string;
  isCorrect: boolean;
}
