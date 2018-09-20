import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe'
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBo3TOEtGvoIRjjn88SPan9LmsmKtQ5x-g",
      authDomain: "udemy-cours-project.firebaseapp.com"
    })
  }

  noNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
