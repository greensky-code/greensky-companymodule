import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path : '' , redirectTo : '/login', pathMatch : "full"},
  { path : 'login' , component: LoginComponent},
  { path : 'signup' , component: SignupComponent},
  { path: '', component : AppComponent},
  { path : '' , loadChildren : () => import("./layouts/layout.module").then(m => m.layoutModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
