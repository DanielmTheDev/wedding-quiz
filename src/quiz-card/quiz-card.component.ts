import { Component, Input } from '@angular/core';
import { Answer, StepContent } from "../quiz/step-content";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [MatCardModule, MatRadioModule, CommonModule, MatButtonModule, MatStepperModule, FormsModule],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.scss'
})
export class QuizCardComponent {
  @Input({ required: true })
  step!: StepContent;

  protected selectedAnswer?: Answer
}
