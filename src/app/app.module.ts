import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserlistingComponent } from './component/userlisting/userlisting.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    DashboardComponent,
    UserlistingComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
