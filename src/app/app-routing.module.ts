import { NgModule } from '@angular/core';
//RouterModule一个独立的Angular模块，用于提供所需的服务提供商，以及用来在应用视图之间进行导航的指令。
//Routes 定义了一个路由数组，每一个都会把一个URL路径映射到一个组件。
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes : Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashBoardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path:'detail/:id',
        component: HeroDetailComponent
        
      }
]



@NgModule(
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
)
export class AppRoutingModule{

}
