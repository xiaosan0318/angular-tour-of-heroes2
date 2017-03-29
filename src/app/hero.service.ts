import { Injectable } from '@angular/core';
import { HEROES } from './hero.mock';

@Injectable()
export class HeroService {

    getHeroes(){
        return HEROES;
    }
}