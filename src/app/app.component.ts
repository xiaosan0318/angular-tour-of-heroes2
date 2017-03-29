import { Component } from '@angular/core';
import { Hero} from './hero';

// export class Hero {
//   id: number;
//   name: string;
// }

const HEROES : Hero[] = [
    {id: 11, name: "hehe"},
    {id: 12, name: "yezhengmao"},
    {id: 13, name: "chengchunhui"},
    {id: 14, name: "zhuyunxing"},
    {id: 15, name: "zhouxuan"},
    {id: 16, name: "miaojujie"},
    {id: 17, name: "xiaosan"},
    {id: 18, name: "lijiangfeng"},
    {id: 19, name: "fangjunxiao"},
    {id: 11, name: "zhengchan"},
  ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of heroes2!';
  hero : Hero = {id: 22, name: 'xixi'};

  heroes = HEROES; 

  selectedHero : Hero;

  onSelected(hero : Hero) :void{
     this.selectedHero = hero;
  }
}
