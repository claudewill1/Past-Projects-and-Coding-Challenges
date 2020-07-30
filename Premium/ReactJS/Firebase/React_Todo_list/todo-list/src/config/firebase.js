import * as firebase from 'firebase'

import {FirebaseConfig} from '../config/keys';
console.log(FirebaseConfig)
firebase.initializeApp(FirebaseConfig)
firebase.analytics();


const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");

