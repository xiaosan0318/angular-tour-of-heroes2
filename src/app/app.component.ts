import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
      <h1>{{title}}</h1>
      <h2>{{hero.name}} detail!</h2>
      <div><label>id:</label><label>{{hero.id}}</label></div>
      <div><label>name:</label><label>{{hero.name}}</label></div>
      `
})
export class AppComponent {
  title = 'angular-tour-of heroes2!';
  hero : Hero = {id: 22, name: 'xixi'};
}
