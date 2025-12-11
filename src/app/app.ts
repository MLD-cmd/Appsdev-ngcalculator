import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from "./calculator/calculator";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet, Calculator]
})
export class App {
  protected readonly title = signal('ngcalculator');
}
