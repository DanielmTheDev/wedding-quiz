import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatStepper, MatStepperModule } from "@angular/material/stepper";
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
export class QuizComponent {
  @ViewChild('stepper')
  stepper!: MatStepper;

  protected steps: StepContent[] = this.getSteps()

  completeCurrentStep(): void {
    if (!this.stepper.selected) {
      return;
    }
    this.stepper.selected.completed = true;
    this.stepper.next();
  }

  private getSteps(): StepContent[] {
    return [
      {
        title: 'Reisen',
        imagePath: 'assets/reisen_flugzeug_ruhigster_platz.jpeg',
        question: 'Welcher Sitzplatz im Flugzeug ist meist am ruhigsten?',
        isFinalAnswer: false,
        answers: [
          { text: 'Ganz hinten', isCorrect: false },
          { text: 'Direkt neben der Tür', isCorrect: false },
          { text: 'Über den Tragflächen', isCorrect: true },
          { text: 'Vorne beim Cockpit', isCorrect: false }
        ]
      },
      {
        title: 'Zuhause',
        imagePath: 'assets/zuhause_ibbenbueren_bergbau.jpeg',
        question: 'Wofür war Ibbenbüren bis 2018 besonders bekannt?',
        isFinalAnswer: false,
        answers: [
          { text: 'Herstellung von Gartenzwergen', isCorrect: false },
          { text: 'Steinkohlebergbau', isCorrect: true },
          { text: 'Flughafen „Ibbi-Air“', isCorrect: false },
          { text: 'Größte Gummibärchen-Fabrik Deutschlands', isCorrect: false }
        ]
      },
      {
        title: 'Heiratsantrag in Amsterdam',
        imagePath: 'assets/amsterdam_grachten_venedig_des_nordens.jpeg',
        question: 'Amsterdam wird auch „Venedig des Nordens“ genannt – warum?',
        isFinalAnswer: false,
        answers: [
          { text: 'Wegen der vielen Fahrräder', isCorrect: false },
          { text: 'Wegen der zahlreichen Grachten', isCorrect: true },
          { text: 'Wegen der bunten Tulpenfelder', isCorrect: false },
          { text: 'Wegen der Windmühlen', isCorrect: false }
        ]
      },
      {
        title: 'Euer Baby',
        imagePath: 'assets/ridgeback_temperament.jpeg',
        question: 'Das Temperament des Ridgebacks lässt sich wie folgt beschreiben:',
        isFinalAnswer: false,
        answers: [
          { text: 'sensibel, ruhig, aufmerksam, anhänglich, willensstark', isCorrect: true },
          { text: 'laut, verspielt, unbekümmert', isCorrect: false },
          { text: 'sanft, aufmerksam, neugierig', isCorrect: false },
          { text: 'albern, freundlich, zerstreut', isCorrect: false }
        ]
      },
      {
        title: 'Freundschaft',
        imagePath: 'assets/freundschaft_drei_engel_frichael.jpeg',
        question: 'Was beschreibt eure Lieblingsmenschen Moritz, Robin und Pia am besten?',
        isFinalAnswer: false,
        answers: [
          { text: 'Die dreisten Drei', isCorrect: false },
          { text: 'Die drei Fragezeichen', isCorrect: false },
          { text: 'Dreikäsehoch', isCorrect: false },
          { text: 'Drei Engel für Frichael', isCorrect: true }
        ]
      },
      {
        title: 'Drei Engel für Frichael',
        imagePath: 'assets/drei_engel_frichael_vorlieben.jpeg',
        question: 'Was mögen wir am liebsten:',
        isFinalAnswer: false,
        answers: [
          { text: 'Gemeinsames Feierabend-Bier', isCorrect: true },
          { text: 'Fußmassagen', isCorrect: false },
          { text: 'Hobby-Horsing', isCorrect: false },
          { text: 'Briefmarken sammeln', isCorrect: false }
        ]
      },
      {
        title: 'Gemeinsames Feierabend-Bier',
        imagePath: 'assets/feierabend_bier_terrasse.jpeg',
        question: 'Was bekommt ihr für ein kühles Bier bei euch auf der Terrasse?',
        isFinalAnswer: true,
        answers: [
          { text: 'Ein Küsschen aufs Nüsschen', isCorrect: false },
          { text: 'Den Schlüssel für eure Schatzkiste', isCorrect: false },
          { text: 'Einen netten Abend mit den Besten', isCorrect: false },
          { text: 'Alle Antworten sind richtig', isCorrect: true }
        ]
      }
    ];
  }
}
