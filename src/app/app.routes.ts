import { Routes } from '@angular/router';
import { QuizComponent } from "../quiz/quiz.component";
import { HomeComponent } from "../home/home.component";
import { SuccessComponent } from "../success/success.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'success', component: SuccessComponent },
];
