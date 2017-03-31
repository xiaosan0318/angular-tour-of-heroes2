import { Injectable } from '@angular/core';
import { HEROES } from './hero.mock';
import { Hero } from './hero';
import { Http, Headers } from '@angular/http';
import "rxjs/add/operator/toPromise";

@Injectable()
export class HeroService {

    constructor(private http: Http){

    }
    getHeroes(){
        return HEROES;
    }

    private baseUrl = "api/heroes";
    getHeroesPromise() : Promise<Hero[]>{
        
        return this.http.get(this.baseUrl)
        .toPromise()
        .then(response=> response.json().data as Hero[])
        .catch(this.handleError);
        
        // return Promise.resolve(HEROES);
    }

    private handleError(error: any): Promise<any>{
        console.error("an error occurred", error);
        return Promise.reject(error.message | error);
    }
    getHeroesSlowly() : Promise<Hero[]>{
        return new Promise(resolve => {
            setTimeout(()=>resolve(this.getHeroes()), 2000);
        })
    }

    getHero(id: number) : Promise<Hero>{
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url)
        .toPromise()
        .then(response=> response.json().data as Hero)
        .catch(this.handleError);
        //return this.getHeroesPromise().then(heroes=> heroes.find(hero=>hero.id === id));
    }

    private headers = new Headers({'Content-Type':'application/json'});
    update(hero: Hero): Promise<Hero>{
        const url = `${this.baseUrl}/${hero.id}`;
        return this.http.put(url,JSON.stringify(hero), {headers: this.headers}).toPromise().then(()=>hero).catch(this.handleError);
        
    }

    create(name: string): Promise<Hero>{
        return this.http.post(this.baseUrl, JSON.stringify({name: name}),{headers: this.headers})
        .toPromise()
        .then(response=> response.json().data as Hero)
        .catch(this.handleError);
    }

    delete(hero: Hero): Promise<void>{
        const url = `${this.baseUrl}/${hero.id}`;
        return this.http.delete(url,{headers: this.headers})
        .toPromise()
        .then(()=> null)
        .catch(this.handleError);
    }
}