import { NgModule } from '@angular/core';

import { OwnerRoutingModule } from './owner-routing.module';
import { SharedModule } from '@shared/shared.module';
import { OwnerProfileComponent } from './owner-profile/owner-profile.component';
import { OwnerDogProfileComponent } from './owner-dog-profile/owner-dog-profile.component';


@NgModule({
  declarations: [OwnerProfileComponent, OwnerDogProfileComponent],
  imports: [
    SharedModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
