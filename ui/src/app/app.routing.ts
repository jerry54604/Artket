import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/Auth/signin.component';
import { SignupComponent } from './pages/Auth/signup.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
