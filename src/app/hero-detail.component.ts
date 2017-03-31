import { Component, Input,OnInit } from '@angular/core';
//ActivatedRoute为每个路由组件提供提供的一个服务，它包含特定于路由的信息，比如路由参数、静态数据、解析数据、全局查询参数和全局碎片（fragment）。
import { ActivatedRoute, Params} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl:'./hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
      hero: Hero;

        ngOnInit(): void {
            this.route.params
            .switchMap((params: Params)=> this.heroService.getHero(+params['id']))//返回Observable对象
            .subscribe(hero => this.hero = hero);
            
        }

        constructor(private heroService: HeroService,private route: ActivatedRoute,private location : Location){

        }

        goBack(){
            this.location.back();
        }

        save(){
            this.heroService.update(this.hero).then(()=>this.goBack());
        }

  
}