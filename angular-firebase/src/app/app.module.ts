import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp } from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app'
import { getAuth } from "firebase/auth";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

const firebaseConfig = {
  apiKey: "AIzaSyD4neqY5Hll36gMoO9HgbFE1IRk6DMAu4M",
  authDomain: "angular-firebase-ee287.firebaseapp.com",
  projectId: "angular-firebase-ee287",
  storageBucket: "angular-firebase-ee287.appspot.com",
  messagingSenderId: "64884599",
  appId: "1:64884599:web:9fe571b249b96a17699b72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireAuth
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
