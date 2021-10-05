import { Injectable } from '@angular/core';
import firebase from "firebase/compat/app";
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    public router: Router
  ) { }

  formLogin = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  

  login(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(value => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/admin');
    })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      });
  }


}
