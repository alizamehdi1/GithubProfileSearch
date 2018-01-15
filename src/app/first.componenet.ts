import { Component, Input, EventEmitter , Output} from '@angular/core';
// import { Output } from '@angular/core/src/metadata/directives';
// import { EventEmitter } from 'selenium-webdriver';


@Component({
selector: 'app-firstproject',
template: `<h1>{{title}}</h1>
            <img [src]="imgLink"><br><br>
            <input  type="text" value="Angular" #demoinput>
             <div [style.color]= "stylefield? 'red': 'orange'">welocme to style binding </div>
            <div  [class.myclass]="applystyle">welocme to style binding </div>
            <button  (click)="onClick($event )">Click Me !!</button><br><br>
            <input type="text" [(ngModel)]="fname"><br><br>
            <input type="text"[(ngModel)]="lname">
            FullName:{{fname}} {{lname}}<br><br>
            <p *ngIf="showParagraph">Show Paragraph</p>
            <div [ngSwitch]="color"><p  *ngSwitchCase="'red'">{{color}} Color</p><p  *ngSwitchCase="'blue'">{{color}} Color</p>
            <p  *ngSwitchDefault>{{color}} Color</p> </div>
            <ul>
            <li  *ngFor="let color of array">{{color}}</li>
            </ul><br><br>
            <p [ngClass]="{classone:cone,classtwo:ctwo}">NgClass example</p>
            <p [ngStyle]="{'color':fontStyle,'font-size':fontSize}">NgStyle Example</p><br><br>
            <h2>Child Component</h2>
            <label>Enter the value of child component</label>
            <input type="text" #childtext (keyup)="onChange(childtext.value)">
            <p>Value of Child Component is</p>
            {{parentData}}`,
styles: [`.classone{
color:red;
} .classtwo{
    background-color:blue;
}`]
})

export class FirstComponent {
    public title= `Hello to first project`;
    public imgLink= `assets/images/Jellyfish.jpg`;
    public stylefield= false;
    public applystyle= true ;
    public fname;
    public lname;
    public showParagraph= false;
    public color= 'green';
    public array= ['red', 'blue', 'green'];
    public cone= true;
    public ctwo= true;
    public fontStyle= 'pink';
    public fontSize= '50px';
    @Input() parentData: string;
    @Output() childEvent= new EventEmitter<string>() ;
  onClick(value) {
      console.log(value);
  }
  onChange(value: string) {
    this.childEvent.emit(value);
  }
}
