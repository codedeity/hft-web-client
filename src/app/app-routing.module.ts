import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  HftAuthComponent,
  HftLoginComponent,
  HftLogoutComponent,
  HftRegisterComponent,
  HftRequestPasswordComponent,
  HftResetPasswordComponent,
} from './@theme/components';

const routes: Routes = [
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: HftAuthComponent,
    children: [
      {
        path: '',
        component: HftLoginComponent,
      },
      {
        path: 'login',
        component: HftLoginComponent,
      },
      {
        path: 'register',
        component: HftRegisterComponent,
      },
      {
        path: 'logout',
        component: HftLogoutComponent,
      },
      {
        path: 'request-password',
        component: HftRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: HftResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
