import { Component, Input } from '@angular/core';
import { StepContent } from "../quiz/step-content";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [MatCardModule, MatCheckboxModule, CommonModule, MatButtonModule, MatStepperModule],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.scss'
})
export class QuizCardComponent {
  @Input({required: true})
  step!: StepContent;
}
