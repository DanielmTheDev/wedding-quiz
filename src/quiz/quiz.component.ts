import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

}
