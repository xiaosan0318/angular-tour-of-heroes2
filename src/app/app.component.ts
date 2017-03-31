import { Component } from '@angular/core';

//该指令（<router-outlet>）用来标记出路由器该在哪里显示视图。 
//该指令用来把一个可点击的HTML元素绑定到路由。 点击带有绑定到字符串或链接参数数组的routerLink指令的元素就会触发一次导航。
//当HTML元素上或元素内的routerLink变为激活或非激活状态时，该指令为这个HTML元素添加或移除CSS类。
@Component({
    moduleId: module.id,
    selector: 'app-root',
template: `
        <h1>{{title}}</h1>
        <nav>
        <a routerLink="/dashboard" routerLinkActive="active">dashboard</a>
        <a routerLink="/heroes" routerLinkActive="active">heroes</a>
        </nav>
        
        <router-outlet></router-outlet>
            `,
            styleUrls: ['./app.component.css']
})
export class AppComponent  { 
      title = 'angular-tour-of heroes2!';
    constructor() {
        
    }
}