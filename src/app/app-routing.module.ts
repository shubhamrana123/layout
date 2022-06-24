import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { UserlistingComponent } from './component/userlisting/userlisting.component';

const routes: Routes = [
  // {path:'',component:HomeComponent},
  // {path:'dashboard',component:DashboardComponent},
  // {path:'contact',component:ContactUsComponent},
  // {path:'user',component:UserlistingComponent},
  { path: '', loadChildren: () => import('./login-before/login-before.module').then(m => m.LoginBeforeModule) },
  { path: 'app', loadChildren: () => import('./login-after/login-after.module').then(m => m.LoginAfterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
