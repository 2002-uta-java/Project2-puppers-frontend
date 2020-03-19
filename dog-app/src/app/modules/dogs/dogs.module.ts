import { NgModule } from '@angular/core';

import { DogsRoutingModule } from './dogs-routing.module';
import { DogsComponent } from './dogs.component';
import { SharedModule } from '@shared/shared.module';
import { DogProfileComponent } from './dog-profile/dog-profile.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { NavBreadcrumbComponent } from './nav-breadcrumb/nav-breadcrumb.component';


@NgModule({
  declarations: [DogsComponent, DogProfileComponent, DogListComponent, NavBreadcrumbComponent],
  imports: [
    SharedModule,
    DogsRoutingModule
  ]
})
export class DogsModule { }
