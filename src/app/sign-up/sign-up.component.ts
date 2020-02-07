import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { AlertService } from "../alert/alert.service";
import UserCredential = firebase.auth.UserCredential;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AngularFireAuth, private alertService: AlertService) {
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
    this.auth.createUserWithEmailAndPassword(val.email, val.password).then(
      (cred: UserCredential) => {
        cred.user.updateProfile({displayName: `${val.firstName} ${val.lastName}`});
      },
      err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
            this.alertService.error(err.message);
            this.signupForm.controls['email'].setErrors({incorrect: true});
            break;
          case 'auth/invalid-email':
            this.alertService.error(err.message);
            this.signupForm.controls['email'].setErrors({incorrect: true});
            break;
          case 'auth/operation-not-allowed':
            this.alertService.error('Unable to sign you up - please contact us');
            this.signupForm.reset();
            break;
          case 'auth/weak-password':
            this.alertService.error(err.message);
            this.signupForm.controls['password'].setErrors({incorrect: true});
            break;
        }
      }
    );
  }

}
