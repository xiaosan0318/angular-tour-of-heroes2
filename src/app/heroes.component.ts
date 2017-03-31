import { Component, OnInit } from '@angular/core';
import { Hero} from './hero';
import { HeroService } from './hero.service';
//为激活的URL显示应用组件。管理从一个组件到另一个组件的导航
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

  add(name: string): void{
    name = name.trim();
    if(!name) return;
    this.heroService.create(name).then(hero=> this.heroes.push(hero));
  }

  delete(hero:Hero): void{
    this.heroService.delete(hero)
    .then(()=>{
      this.heroes = this.heroes.filter(h=> h !== hero)
      if(this.selectedHero === hero) this.selectedHero = null;
    });
  }



  selectedHero : Hero;

  onSelected(hero : Hero) :void{
     this.selectedHero = hero;
  }

//命令式的导航
  gotoDetail(){
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
