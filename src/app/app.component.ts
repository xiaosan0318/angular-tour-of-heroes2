import { Component, OnInit } from '@angular/core';
import { Hero} from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
      this.getHeroes();
    }

  title = 'angular-tour-of heroes2!';
  hero : Hero = {id: 22, name: 'xixi'};

  heroes : Hero[]; 

  constructor(private heroService : HeroService){

  }

  getHeroes(){
    this.heroes = this.heroService.getHeroes();
  }



  selectedHero : Hero;

  onSelected(hero : Hero) :void{
     this.selectedHero = hero;
  }
}
