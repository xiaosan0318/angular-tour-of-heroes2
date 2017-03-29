import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'my-hero-detail',
    template: `
        <div *ngIf="hero" >
      <h2>{{hero.name}} detail!</h2>
      <div><label>id:</label><label>{{hero.id}}</label></div>
      <div><label>name:</label><input [(ngModel)]="hero.name" >
      </div>
      </div>
    `
})
export class HeroDetailComponent  { 
    @Input()
    hero: Hero;
}