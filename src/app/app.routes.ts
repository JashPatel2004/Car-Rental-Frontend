import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './Auth/login/login.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { OtpVerifyComponent } from './Auth/otp-verify/otp-verify.component';
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
import { ClientDashboardComponent } from './Client/client-dashboard/client-dashboard.component';
import { adminGuardGuard } from './Auth/admin-guard.guard';

export const routes: Routes = [
    {path:"",component: LoginComponent},
    {path:"login",component: LoginComponent},
    {path:"signup",component: SignUpComponent},
    {path:"otp",component: OtpVerifyComponent},
    {path:"adminDash",canActivate:[adminGuardGuard],component: AdminDashboardComponent},
    {path:"clientDash",component: ClientDashboardComponent},
];
