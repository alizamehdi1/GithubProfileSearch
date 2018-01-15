import { Component } from '@angular/core';
import {NavBARComponent} from './Components/navbar.component' ;
import {FirstComponent} from './first.componenet';
import { Directive } from '@angular/core/src/metadata/directives';
import { FormsModule, NgForm } from '@angular/forms';
import {ViewChild} from '@angular/core';
import {JumboTronComponent} from './Components/Jumbotron/jumbotron.component' ;
import {HomeComponent} from './Components/Pages/home.component' ;
import {AboutComponent} from './Components/Pages/about.component' ;
import { ProfileComponent } from './Components/profile.component';
import {GithubService} from '../app/Components/Services/githubservices';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!!';
  public childData: string;
  onSubmit(value: any) {
    console.log(value);
    console.log('Hello');
  }
}
