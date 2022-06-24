import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from '../component/contact-us/contact-us.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { UserlistingComponent } from '../component/userlisting/userlisting.component';
import { FooterAfterComponent } from './footer-after/footer-after.component';
import { HeaderAfterComponent } from './header-after/header-after.component';
import { LoginAfterComponent } from './login-after.component';
import { SidebarAfterComponent } from './sidebar-after/sidebar-after.component';

const routes: Routes = [
  { path: '', component: LoginAfterComponent,
  children:[
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
{path:'userlist',component:UserlistingComponent}
  ]

}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAfterRoutingModule { }
