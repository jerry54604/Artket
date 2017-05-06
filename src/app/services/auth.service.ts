import { User } from './../interface/user.interface';
import{ Injectable } from '@angular/core';
import{ Router } from '@angular/router';
import {Location} from '@angular/common';
import { Subject, Observable } from 'rxjs';

declare var firebase: any;

@Injectable()
export class AuthService {
  constructor(private router: Router, private _location: Location){}
    signupUser(user: User) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            // Handle Errors here.
            /*var errorCode = error.code;
            var errorMessage = error.message;*/
            // ...
            console.log(error);
        });
        this.backClicked();
    }

    signinUser(user: User) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
            // Handle Errors here.
            /*var errorCode = error.code;
            var errorMessage = error.message;*/
            // ...
            console.log(error);
        });
        this.backClicked();
    }

    isSignIn(): Observable<boolean>
    {
      const subject = new Subject<boolean>();
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          subject.next(true);
        } else {
          subject.next(false);
        }
      });
      return subject.asObservable();
    }

    logout(){
      firebase.auth().signOut();
      this.router.navigate(['/signin']);
    }

    backClicked() {
        this._location.back();
    }

}
