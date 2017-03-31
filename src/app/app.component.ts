import { Component } from '@angular/core';

//该指令（<router-outlet>）用来标记出路由器该在哪里显示视图。 
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