import { Component } from '@angular/core';



@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html'
})
export class JumboTronComponent  { 
    private jumbotronHeading: string;
    private jumbotronContent: string;
    private jumbotronUrl: string;
    private jumbotronBtnText: string;
    constructor(){
        this.jumbotronContent = 'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.';
        this.jumbotronHeading = 'Hello World !';
        this.jumbotronBtnText = 'Learn more';
        this.jumbotronUrl = 'http://google.com/';

    }
}