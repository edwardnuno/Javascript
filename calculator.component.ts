import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  myName:string = 'name'
  test?:number

  getData(value:any){
    console.log(value)
  }

  calc(expression: any) {
    var firstNo = Number((<HTMLInputElement>document.getElementById('firstNum')).value)
    var secondNo = Number((<HTMLInputElement>document.getElementById('secondNum')).value)
    console.log(expression)
    var result
    switch(expression){
      case '+':
        result = firstNo + secondNo;
        break;
      case '-':
        result = firstNo - secondNo;
        break;
      case '*':
        result = firstNo * secondNo;
        break;
      case '/':
        result = firstNo / secondNo;
        break;
      }
    console.log(result)
    // (<HTMLInputElement>document.getElementById('result')).value = result
    this.test = result
    return result;
    }
    
}
console.log("hello world")
