import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(public auth: AngularFireAuth) {
  }

  ngOnInit() {
  }

  public signIn() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(r => console.log(r.user));
  }

  public signOut() {
    this.auth.signOut().then(r => console.log(r));
  }

}
