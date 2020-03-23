import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedComponent } from '@modules/breed/breed.component';


const routes: Routes = [
  {
    path: '',
    component: BreedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreedRoutingModule { }
