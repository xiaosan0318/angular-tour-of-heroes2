import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { Hero } from '../hero';

/**
* This class provides the HeroSearch service with methods to read names and add names.
*/
@Injectable()
export class HeroSearchService {

    constructor(private http: Http) {}

    search(term: string): Observable<Hero[]>{
        return this.http.get("api/heroes?name="+term)
        //这里没有toPromise(),直接用get返回的Observable可观察者对象
        .map((response : Response)=> response.json().data as Hero[]);//使用扩展的map操作符从response提取返回的数据。
    }
    
}