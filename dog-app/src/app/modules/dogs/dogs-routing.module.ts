import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DogsComponent } from '@modules/dogs/dogs.component';
import { DogListComponent } from '@modules/dogs/dog-list/dog-list.component';
import { NavBreadcrumbComponent } from '@modules/dogs/nav-breadcrumb/nav-breadcrumb.component';
import { DogProfileComponent } from '@modules/dogs/dog-profile/dog-profile.component';


const routes: Routes = [
  {
    path: '',
    component: DogsComponent,
    children: [
      {
        path: ':id',
        component: DogProfileComponent,
      },
      {
        path: '',
        component: DogListComponent,
      },
      {
        path: '',
        component: NavBreadcrumbComponent,
        outlet: 'navBreadcrumb',
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DogsRoutingModule { }
