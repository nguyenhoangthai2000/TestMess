import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessPage } from './mess.page';

const routes: Routes = [
  {
    path: '',
    component: MessPage
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forget-pass',
    loadChildren: () => import('./forget-pass/forget-pass.module').then( m => m.ForgetPassPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessPageRoutingModule {}
