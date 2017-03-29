import { Injectable } from '@angular/core';
import { HEROES } from './hero.mock';
import { Hero } from './hero';

@Injectable()
export class HeroService {

    getHeroes(){
        return HEROES;
    }

    getHeroesPromise() : Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly() : Promise<Hero[]>{
        return new Promise(resolve => {
            setTimeout(()=>resolve(this.getHeroes()), 2000);
        })
    }

    getHero(id: number) : Promise<Hero>{
        return this.getHeroesPromise().then(heroes=> heroes.find(hero=>hero.id === id));
    }
}