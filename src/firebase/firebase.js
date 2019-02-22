import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCD9KIos-ngmciCahdusagisJaiV8EO4D4",
  authDomain: "expensify-84681.firebaseapp.com",
  databaseURL: "https://expensify-84681.firebaseio.com",
  projectId: "expensify-84681",
  storageBucket: "expensify-84681.appspot.com",
  messagingSenderId: "673144052017"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
name:'Ricky Raghavan',
age: 26

});
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
