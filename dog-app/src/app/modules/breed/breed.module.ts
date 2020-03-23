import { NgModule } from '@angular/core';

import { BreedRoutingModule } from './breed-routing.module';
import { BreedComponent } from './breed.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [BreedComponent],
  imports: [
    SharedModule,
    BreedRoutingModule
  ]
})
export class BreedModule { }
