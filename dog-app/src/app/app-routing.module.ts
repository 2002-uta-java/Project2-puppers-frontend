import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/public/home/home.component';
import { LoginComponent } from '@app/public/login/login.component';
import { AboutComponent } from '@app/public/about/about.component';
import { ContactComponent } from '@app/public/contact/contact.component';
import { AuthGuard } from '@core/guards/auth.guard';
import { RegisterComponent} from '@app/modules/register/register.component'


const routes: Routes = [
  {
    path: "dashboard",
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: "dogs",
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/dogs/dogs.module').then(m => m.DogsModule)
  },
  {
    path: "owners",
    canActivate: [AuthGuard],
    loadChildren: () => import('@modules/owner/owner.module').then(m => m.OwnerModule)
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
