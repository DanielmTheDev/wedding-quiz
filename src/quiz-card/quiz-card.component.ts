import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Answer, StepContent } from "../quiz/step-content";
import { MatCardModule } from "@angular/material/card";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { MatRadioModule } from "@angular/material/radio";
import { FormsModule } from "@angular/forms";
import { MatDividerModule } from "@angular/material/divider";
import { Router } from "@angular/router";

@Component({
  selector: 'app-quiz-card',
  standalone: true,
  imports: [MatCardModule, MatRadioModule, CommonModule, MatButtonModule, MatStepperModule, FormsModule, MatDividerModule],
  templateUrl: './quiz-card.component.html',
  styleUrl: './quiz-card.component.scss'
})
export class QuizCardComponent {
  @Input({ required: true })
  step!: StepContent;
  @Output() completeStep = new EventEmitter();
  private router = inject(Router)

  protected selectedAnswer?: Answer

  protected async finishStep() {
    if (!this.selectedAnswer?.isCorrect) {
      return;
    }
    if (!this.step.isFinalAnswer) {
      this.completeStep.emit()
    } else {
      await this.router.navigate(['success'])
    }
  }
}
