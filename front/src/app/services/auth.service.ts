import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormGroup, FormControl } from '@angular/forms';

@Injectable()
export class AuthService {

  constructor() { }

  formLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }


}
