import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root',
})
export class FireAuthService
{
  isLoggedIn: boolean;
  userEmail: string;
  userId: string;
  loggedInEmitter = new Subject<boolean>();
  emailAndIdInEmitter = new Subject<any>();

  constructor(public firebaseAuth: AngularFireAuth, public router: Router) { }

  //sign in with email password
  async signin(email: string, password: string)
  {
    let error = '';
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (res) =>
      {
        this.userId = res.user.uid;
        this.userEmail = res.user.email;
        this.isLoggedIn = true;
        this.loggedInEmitter.next(this.isLoggedIn);
        this.emailAndIdInEmitter.next({
          email: this.userEmail,
          id: this.userId,
        });

        await Storage.set({
          key: 'userId',
          value: res.user.uid,
        });
        await Storage.set({
          key: 'userEmail',
          value: res.user.email,
        });
        await Storage.set({
          key: 'userId',
          value: res.user.uid,
        });
        this.router.navigate(['private/home']);
      })
      .catch((err) => error = err.message);

    if (error)
    {
      return error;
    }
  }
  //sign up with email password
  async signup(email: string, password: string)
  {
    let error = '';
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) =>
      {
        this.userId = res.user.uid;
        this.userEmail = res.user.email;
        this.isLoggedIn = true;
        this.loggedInEmitter.next(this.isLoggedIn);
        this.emailAndIdInEmitter.next({
          email: this.userEmail,
          id: this.userId,
        });

        await Storage.set({
          key: 'userId',
          value: res.user.uid,
        });
        await Storage.set({
          key: 'userEmail',
          value: res.user.email,
        });
        await Storage.set({
          key: 'userId',
          value: res.user.uid,
        });
        this.router.navigate(['private/home']);
      })
      .catch((err) => error = err.message);

    if (error)
    {
      return error;
    }
  }
  //logout
  async logout()
  {
    await Storage.remove({ key: 'userId' });
    await Storage.remove({ key: 'userEmail' });
    await Storage.remove({ key: 'userId' });
    this.firebaseAuth.signOut();
    this.router.navigate(['public/login']);
    location.reload();
  }
  //check if a user is logged in
  async getIsLoggedIn()
  {
    const id = await Storage.get({ key: 'userId' });
    const userId = JSON.parse(id.value);

    console.log(`storagedlogger ${userId}!`);

    return id;
  }
  //auth with google
  async loginWithGoogle()
  {

    await this.firebaseAuth
      .signInWithPopup(new firebase.default.auth.GoogleAuthProvider())
      .then(async (res) =>
      {
        console.log('succesfully google auth', res);
        this.userId = res.user.uid;
        this.userEmail = res.user.email;
        this.isLoggedIn = true;
        this.emailAndIdInEmitter.next({
          email: this.userEmail,
          id: this.userId,
        });

        await Storage.set({
          key: 'userId',
          value: res.user.uid,
        });
        await Storage.set({
          key: 'userEmail',
          value: res.user.email,
        });
        await Storage.set({
          key: 'userId',
          value: res.user.uid,
        });
        this.router.navigate(['private/home']).then(() =>
        {
          window.location.reload();
        });
      })
      .catch((err) => console.log(err));
  }
}
