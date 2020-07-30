import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import * as firebase from 'firebase'



import {FirebaseConfig} from '../../config/keys';
if(!firebase.apps.length){
    firebase.initializeApp(FirebaseConfig)
}
firebase.analytics();


const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")

class Firebase {
    constructor(){
        applicationCache.initializeApp(FirebaseConfig);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email,password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');
}

export default Firebase;