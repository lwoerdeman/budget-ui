import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from "./alert/alert.module";
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { environment } from "../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from "@angular/fire/auth-guard";
import { LoginComponent } from './login/login.component';

const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['sign-in']);



const appRoutes: Routes = [
  {path: '', component: HomeComponent, ...canActivate(redirectLoggedInToDashboard)},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, ...canActivate(redirectUnauthorizedToLogin)},

];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
    SignUpComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ClarityModule,
    BrowserAnimationsModule,
    AlertModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
