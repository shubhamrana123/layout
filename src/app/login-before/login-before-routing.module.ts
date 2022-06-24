import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from '../component/contact-us/contact-us.component';
import { HomeComponent } from '../component/home/home.component';
import { HeaderAfterComponent } from '../login-after/header-after/header-after.component';
import { FooterBeforeComponent } from './footer-before/footer-before.component';
import { HeaderBeforeComponent } from './header-before/header-before.component';
import { LoginBeforeComponent } from './login-before.component';
import { SidebarBeforeComponent } from './sidebar-before/sidebar-before.component';

const routes: Routes = [{ path: '', component: LoginBeforeComponent,
children:[
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactUsComponent}
]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginBeforeRoutingModule { }
