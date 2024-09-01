import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatStep, MatStepper, MatStepperNext, MatStepperPrevious } from "@angular/material/stepper";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatStep, MatStepper, MatStepperNext, MatStepperPrevious],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

}
