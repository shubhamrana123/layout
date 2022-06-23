import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAfterComponent } from './login-after.component';

const routes: Routes = [{ path: '', component: LoginAfterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAfterRoutingModule { }
