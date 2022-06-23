import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAfterComponent } from '../login-after/header-after/header-after.component';
import { FooterBeforeComponent } from './footer-before/footer-before.component';
import { HeaderBeforeComponent } from './header-before/header-before.component';
import { LoginBeforeComponent } from './login-before.component';
import { SidebarBeforeComponent } from './sidebar-before/sidebar-before.component';

const routes: Routes = [{ path: '', component: HeaderBeforeComponent },
{path:'sidebar',component:SidebarBeforeComponent},
{path:'footer',component:FooterBeforeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginBeforeRoutingModule { }
