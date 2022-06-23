import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAfterRoutingModule } from './login-after-routing.module';
import { LoginAfterComponent } from './login-after.component';
import { FooterAfterComponent } from './footer-after/footer-after.component';
import { SidebarAfterComponent } from './sidebar-after/sidebar-after.component';
import { HeaderAfterComponent } from './header-after/header-after.component';


@NgModule({
  declarations: [
    LoginAfterComponent,
    FooterAfterComponent,
    SidebarAfterComponent,
    HeaderAfterComponent
  ],
  imports: [
    CommonModule,
    LoginAfterRoutingModule
  ]
})
export class LoginAfterModule { }
