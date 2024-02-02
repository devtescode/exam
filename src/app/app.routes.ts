import { Routes } from '@angular/router';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SigninPageComponent } from './signin-page/signin-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StudentPageComponent } from './student-page/student-page.component';

export const routes: Routes = [
    {path: 'signup', component: SignupPageComponent},
    {path: 'signin', component: SigninPageComponent},
    {path: 'dashboard', component: DashboardPageComponent},
    {path: 'student', component: StudentPageComponent}
];


