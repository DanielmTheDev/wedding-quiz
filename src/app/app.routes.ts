import { Routes } from '@angular/router';
import { QuizComponent } from "../quiz/quiz.component";
import { HomeComponent } from "../home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quiz', component: QuizComponent },
];
