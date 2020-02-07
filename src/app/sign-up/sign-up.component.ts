import { Component, OnInit } from '@angular/core';
import { UserSignup } from "../models/user-signup";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\\n])(?=.*[A-Z])(?=.*[a-z]).*$')]]
    })
  }

  submit() {
    const val = this.signupForm.value;
    const user = new UserSignup(val.firstName, val.lastName, val.email, val.password);
    console.log(user);
  }

}
