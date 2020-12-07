import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameDisplayComponent } from './game-display.component';

const routes: Routes = [
  {
    path: '', 
    component: GameDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameDisplayRoutingModule { }
