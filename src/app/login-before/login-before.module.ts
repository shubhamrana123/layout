import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginBeforeRoutingModule } from './login-before-routing.module';
import { LoginBeforeComponent } from './login-before.component';
import { HeaderBeforeComponent } from './header-before/header-before.component';
import { SidebarBeforeComponent } from './sidebar-before/sidebar-before.component';
import { FooterBeforeComponent } from './footer-before/footer-before.component';


@NgModule({
  declarations: [
    LoginBeforeComponent,
    HeaderBeforeComponent,
    SidebarBeforeComponent,
    FooterBeforeComponent
  ],
  imports: [
    CommonModule,
    LoginBeforeRoutingModule
  ]
})
export class LoginBeforeModule { }
