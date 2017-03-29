import { Component, OnInit } from '@angular/core';
import { Hero} from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    ngOnInit(): void {
      this.getHeroes();
    }

  hero : Hero = {id: 22, name: 'xixi'};

  heroes : Hero[]; 

  constructor(private heroService : HeroService,private router: Router){

  }

  getHeroes(){
    //this.heroes = this.heroService.getHeroes();
    console.log(1);
    this.heroService.getHeroesPromise().then(heroes=> this.heroes = heroes);
    console.log(2);
  }



  selectedHero : Hero;

  onSelected(hero : Hero) :void{
     this.selectedHero = hero;
  }

  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
