import { Component } from '@angular/core';
import { Directive } from '@angular/core/src/metadata/directives';
import { FormsModule, NgForm } from '@angular/forms';
import {ViewChild} from '@angular/core';
import {GithubService} from '../Components/Services/githubservices';
import 'rxjs/add/operator/map';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
    user: any[];
    repos: any[];
    username: string;
    dummy: string;
   constructor(private _githubservices: GithubService) {
        this._githubservices.getUser().subscribe(user => {this.user = user; });
        this._githubservices.getRepos().subscribe(repos => {this.repos = repos; });
   }
 searchUser() {
    this.dummy = this.username;
     this._githubservices.updateUser(this.username);
     this._githubservices.getUser().subscribe(user => {this.user = user; });
     this._githubservices.getRepos().subscribe(repos => {this.repos = repos; });
 }
}