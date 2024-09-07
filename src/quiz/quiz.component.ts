import { Component, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { StepContent } from "./step-content";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { QuizCardComponent } from "../quiz-card/quiz-card.component";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatStepperModule, CommonModule, MatCheckboxModule, QuizCardComponent, NgOptimizedImage],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent implements OnInit {
  protected steps: StepContent[] = this.getSteps()

  ngOnInit(): void {
    this.steps = this.getSteps();
  }

  private getSteps(): StepContent[] {
    return [
      {
        title: 'Quiz Title',
        question: 'Question 1',
        answers: [
          { text: 'Answer 1', isCorrect: true },
          { text: 'Answer 2', isCorrect: false },
          { text: 'Answer 3', isCorrect: false },
          { text: 'Answer 4', isCorrect: false }
        ]
      },
      {
        title: 'Another Question',
        question: 'Question 2',
        answers: [
          { text: 'Answer 1', isCorrect: false },
          { text: 'Answer 2', isCorrect: true },
          { text: 'Answer 3', isCorrect: false },
          { text: 'Answer 4', isCorrect: false }
        ]
      },
      {
        title: 'Another Question',
        question: 'Question 3',
        answers: [
          { text: 'Answer 1', isCorrect: false },
          { text: 'Answer 2', isCorrect: true },
          { text: 'Answer 3', isCorrect: false },
          { text: 'Answer 4', isCorrect: false }
        ]
      },
      {
        title: 'Another Question',
        question: 'Question 3',
        answers: [
          { text: 'Answer 1', isCorrect: false },
          { text: 'Answer 2', isCorrect: true },
          { text: 'Answer 3', isCorrect: false },
          { text: 'Answer 4', isCorrect: false }
        ]
      },
      {
        title: 'Another Question',
        question: 'Question 3',
        answers: [
          { text: 'Answer 1', isCorrect: false },
          { text: 'Answer 2', isCorrect: true },
          { text: 'Answer 3', isCorrect: false },
          { text: 'Answer 4', isCorrect: false }
        ]
      }
    ];
  }
}
