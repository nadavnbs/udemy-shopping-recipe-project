import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  token:string;

  constructor(private router:Router) { }
  signupUser(email:string,password:string){
    firebase.auth().createUserWithEmailAndPassword(email,password).catch(
      error => console.log(error)
    )
  };
  signInUser(email:string,password:string){
    firebase.auth().signInWithEmailAndPassword(email,password).then(
      response => {
        this.router.navigate(['/'])
        firebase.auth().currentUser.getIdToken().then(
          (token:string) => this.token = token
        )
      }
    ).catch(
      error => console.log(error)
    );
  };
  getIdToken(){
    firebase.auth().currentUser.getIdToken().then(
      (token:string) => this.token = token
    );
    return this.token;
  };
  isAuthenticated(){
    return this.token != null
  };
  logOut(){
    firebase.auth().signOut();
    this.token = null;
  }
}
