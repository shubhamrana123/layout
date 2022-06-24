import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserlistingComponent } from './component/userlisting/userlisting.component';
import { LoginBeforeModule } from './login-before/login-before.module';
// import { SidebarBeforeComponent } from './login-before/sidebar-before/sidebar-before.component';
// import { HeaderBeforeComponent } from './login-before/header-before/header-before.component';
// import { FooterBeforeComponent } from './login-before/footer-before/footer-before.component';
// import { HeaderAfterComponent } from './login-after/header-after/header-after.component';
// import { SidebarAfterComponent } from './login-after/sidebar-after/sidebar-after.component';
// import { FooterAfterComponent } from './login-after/footer-after/footer-after.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    DashboardComponent,
    UserlistingComponent,
  //  SidebarBeforeComponent,
  //  HeaderBeforeComponent,
  //  FooterBeforeComponent,
  //  HeaderAfterComponent,
  //  SidebarAfterComponent,
  //  FooterAfterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginBeforeModule
    // LoginBeforeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
