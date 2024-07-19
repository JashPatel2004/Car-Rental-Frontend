import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path:"",component: LoginComponent},
    {path:"login",component: LoginComponent},
    {path:"signup",component: SignUpComponent}
];
