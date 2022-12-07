import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-test',
  template: `<h1>hi this {{name}}</h1>
  <input [disabled] = "false" [id]="myId" type="text" value = "lucky">
  <input [disabled]="isDisabled" id = {{myId}} type="text" value = "lucky">
  <h2 class="text-success">CodeEvolution</h2>
  <h2 [class]="successClass">CodeEvolution</h2>
  <h2 class = "text-special" [class]="successClass">CodeEvolution</h2>
  <h2 [class.text-danger]="hasError">CodeEvolution</h2>
  <h2 [class] = "messageClasses">code Evolution</h2>
  <h2 [ngStyle]="titleStyles">Style Binding</h2>
  <button (click)="onClick($event)">Greet</button>
  <button (click)="greeting='welcome'">Greet</button>
  {{greeting}}
  <input #myInput type="text">
  <button (click)="logMessage(myInput.value)">Log</button>
  <h2 *ngIf="false ;else elseBlock"> 
    code Evolution
  </h2>
  <ng-template #elseBlock>
    else block statement
  </ng-template>
  <h2>{{0.25 | currency: 'INR'}}</h2>

                         
              `,
  styles: [`
    h1{
      color: blue;
    }
    .text-success{
      color : green;
    }
    .text-danger{
      color  : red;
    }
    .text-special{
      font-style : italic;
    }
    `]
})
export class TestComponent {
  public name ="Lenin";
  public myId = "testId";
  public isDisabled = false;
  public successClass = "text-success";
  public hasError = false;
  public isSPecial = true;
  public messageClasses={
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSPecial,
  }
  public titleStyles ={
    color : "orange",
    fontStyle : "italic"
  }
  public greeting ="";
  constructor() {}
  onClick(event:any){
    console.log(event);
    this.greeting =event.type
  }
  logMessage(value:any){
    console.log(value);
    
  }
}
