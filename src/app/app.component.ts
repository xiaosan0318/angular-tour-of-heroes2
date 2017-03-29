import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'app-root',
template: `
        <h1>{{title}}</h1>
        <nav>
        <a routerLink="/dashboard" routerLinkActive="active">dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">heroes</a>
        </nav>
        
        <router-outlet></router-outlet>
            `,
            styleUrls: ['./app.component.css']
})
export class AppComponent  { 
      title = 'angular-tour-of heroes2!';
    constructor() {
        
    }
}