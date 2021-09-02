import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  isLoggedIn = false;
  constructor(public firebaseAuth : AngularFireAuth) { }
}
