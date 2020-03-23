import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerProfileComponent } from '@modules/owner/owner-profile/owner-profile.component';
import { OwnerDogProfileComponent } from '@modules/owner/owner-dog-profile/owner-dog-profile.component';



const routes: Routes = [
  {
    path: 'profile',
    component: OwnerProfileComponent
  },
  {
    path: 'my-dogs',
    component: OwnerDogProfileComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
