import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';
import { NavbarComponent } from '@app/layout/navbar/navbar.component';
import { FooterComponent } from '@app/layout/footer/footer.component';
import { HomeComponent } from './public/home/home.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';
import { LoginComponent } from './public/login/login.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { RegisterComponent } from './modules/register/register.component';


@NgModule({
  declarations: [
    AppComponent,

    // Layout
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    // Angular
    BrowserAnimationsModule,
    AppRoutingModule,

    // Core & Shared
    CoreModule,
    SharedModule,

    // 3rd Party
  ],
  providers: [
      {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
