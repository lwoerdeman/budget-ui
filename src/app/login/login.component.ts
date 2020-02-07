import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { auth } from "firebase";

const LOGIN_EMAIL_KEY = 'LOGIN_EMAIL';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errMessage: string;

  constructor(private fb: FormBuilder, private router: Router, public auth: AngularFireAuth) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [window.localStorage.getItem(LOGIN_EMAIL_KEY), [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [true]
    })
  }

  submit(): void {
    if (this.loginForm.value.rememberMe) {
      window.localStorage.setItem(LOGIN_EMAIL_KEY, this.loginForm.value.email);
    }
    this.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then(() => this.router.navigate(['dashboard']))
      .catch(() => this.errMessage = "Incorrect Email or Password");
  }

  signInWithGoogle(): void {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(() => this.router.navigate(['dashboard']));
  }
}
