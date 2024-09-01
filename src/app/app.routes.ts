import { Routes } from '@angular/router';
import { QuizComponent } from "../quiz/quiz.component";

export const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: 'quiz', component: QuizComponent },
];
