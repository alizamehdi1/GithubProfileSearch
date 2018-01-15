import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { FirstComponent } from './first.componenet';
import { CommonModule } from '@angular/common' ;
import {NavBARComponent} from './Components/navbar.component' ;
import {JumboTronComponent} from './Components/Jumbotron/jumbotron.component' ;
import {HomeComponent} from './Components/Pages/home.component' ;
import {AboutComponent} from './Components/Pages/about.component' ;
import {RouterModule, Routes} from '@angular/router';
import { ProfileComponent } from './Components/profile.component';
import { GithubService } from './Components/Services/githubservices';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NavBARComponent,
    JumboTronComponent,
    AboutComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule
  ],
  providers: [HttpModule, GithubService],
  bootstrap: [AppComponent],

})
export class AppModule { }
