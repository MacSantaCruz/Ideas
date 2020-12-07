import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path:'',
    component: MainLayoutComponent,
    children:[
      {
        path:'home',
        loadChildren: ()=> import('./pages/home/home.module').then(m=> m.HomeModule)
      },
      { 
        path: 'todo', 
        loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule) 
      },
      {
        path: 'data',
        loadChildren: () => import('./pages/data/data.module').then(m => m.DataModule)
      },
      {
        path: 'info',
        loadChildren: () => import('./pages/info/info.module').then(m => m.InfoModule)
      },
      {
        path: 'game',
        loadChildren: () => import('./pages/game-display/game-display.module').then(m => m.GameDisplayModule)
      },
      {
        path:'**',
        redirectTo:'home'
      }
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
