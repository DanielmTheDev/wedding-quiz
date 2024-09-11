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
export class QuizComponent implements OnInit {
  @ViewChild('stepper')
  stepper!: MatStepper;

  protected steps: StepContent[] = this.getSteps()
  ngOnInit(): void {
    this.steps = this.getSteps();
  }

  completeCurrentStep(): void {
    console.log(this.stepper.selected)
    if (!this.stepper.selected) {
      return;
    }
    this.stepper.selected.completed = true;
    this.stepper.next();
  }

  private getSteps(): StepContent[] {
    return [
      {
        title: 'Karneval',
        imagePath: 'assets/fastnacht.png',
        question: 'Wie alt ist die Bevergerner Fastnacht?',
        isFinalAnswer: false,
        answers: [
          { text: '125 Jahre', isCorrect: false },
          { text: '225 Jahre', isCorrect: false },
          { text: '325 Jahre', isCorrect: false },
          { text: '425 Jahre', isCorrect: true },
        ]
      },
      {
        title: 'Helgoland',
        imagePath: 'assets/helgoland.png',
        question: 'Wie hieß das Hotel, in dem wir untergebracht waren, als ihr euch verlobt habt?',
        isFinalAnswer: false,
        answers: [
          { text: 'Haus am Falm', isCorrect: false },
          { text: 'Haus Quickborn', isCorrect: false },
          { text: 'Haus Marinas', isCorrect: true },
          { text: 'Haus Waltraut', isCorrect: false }
        ]
      },
      {
        title: 'Helgoland',
        imagePath: 'assets/flagge.png',
        isFinalAnswer: false,
        question: 'Grün ist das Land, rot ist die ...?, weiß ist der Strand – das sind die Farben von Helgoland!',
        answers: [
          { text: 'Wand', isCorrect: false },
          { text: 'Kant', isCorrect: true },
          { text: 'Handstand', isCorrect: false }
        ]
      },
      {
        title: 'Bayern',
        imagePath: 'assets/bayer.png',
        isFinalAnswer: false,
        question: 'Was ist die beliebteste Urlaubsaktivität in Süddeutschland?',
        answers: [
          { text: 'Bier trinken', isCorrect: false },
          { text: 'Schuhplattlern', isCorrect: false },
          { text: 'Wandern', isCorrect: true }
        ]
      },
      {
        title: 'Wandern',
        imagePath: 'assets/sächsische_schweiz.png',
        isFinalAnswer: false,
        question: 'Wo befindet sich der einzige Felsennationalpark Deutschlands?',
        answers: [
          { text: 'Bayern', isCorrect: false },
          { text: 'Sachsen', isCorrect: true },
          { text: 'Baden-Württemberg', isCorrect: false },
        ]
      },
      {
        title: 'Urlaub',
        imagePath: 'assets/juledani.png',
        isFinalAnswer: true,
        question: 'Mit wem macht Urlaub am meisten Spaß?',
        answers: [
          { text: 'Dieter & Marion', isCorrect: false },
          { text: 'Kalle & Karola', isCorrect: false },
          { text: 'Jule & Dani', isCorrect: true },
        ]
      }
    ];
  }
}
