import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from "rxjs/Subject";

import "rxjs/add/Observable/of"

import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { Hero } from '../hero';
import { HeroSearchService } from './hero-search.service';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-hero-search',
  providers: [HeroSearchService],
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {

  heroes: Observable<Hero[]>;
  private searchTerms =  new Subject();

  constructor(private heroSearchService : HeroSearchService, private router : Router) { }

  ngOnInit() {
    this.heroes = this.searchTerms
    .debounceTime(300)    // wait 300ms after each keystroke before considering the term
    .distinctUntilChanged() // ignore if next search term is same as previous
    .switchMap((term:string) => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
    .catch(error=> {
      console.log(error);
      return Observable.of<Hero[]>([]);
    })

  }

// Push a search term into the observable stream.
  search(term: string): void{
    this.searchTerms.next(term);
  }

  gotoDetail(hero:Hero){
    this.router.navigate(['/detail',hero.id]);
  }

}
