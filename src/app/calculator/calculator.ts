import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  //imports: [],
  templateUrl: './calculator.html',
  styleUrls: ['./calculator.css'],
})
export class Calculator implements OnInit {

  currentNumber: string = '0';
  firstOperand: number | null = null;
  operator: string | null = null;
  waitForSecondNumber: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public getNumber(v: string): void {
    console.log(v);

    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber =
        this.currentNumber === '0' ? v : this.currentNumber + v;
    }
  }

  public getDecimal(): void {
    if (!this.currentNumber.includes('.')) {
      this.currentNumber += '.';
    }
  }

  private doCalculation(op: string, secondOperand: number){
    switch (op) {
      case '+':
        return this.firstOperand! + secondOperand;
      case '-':
        return this.firstOperand! - secondOperand;
      case '*':
        return this.firstOperand! * secondOperand;
      case '/':
        return this.firstOperand! / secondOperand;
      case '=':
        return secondOperand;
      default:
        return secondOperand;
    }
  }

  public getOperation(op: string){
   
    if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);
    } else if (this.operator) {
      const result = this.doCalculation(
        this.operator,
        Number(this.currentNumber)
      );
      this.currentNumber = String(result);
      this.firstOperand = result;
    }

    this.operator = op;
    this.waitForSecondNumber = true;
  }

  public clear(): void {
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForSecondNumber = false;
  }
}
