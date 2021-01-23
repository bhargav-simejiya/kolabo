import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyBj4fG_RY4VY01VcNZBAFLyhfMbCl7Bsvs",
  authDomain: "https://kolabo-app.firebaseapp.com",
  databaseURL: "https://kolabo-app-default-rtdb.firebaseio.com",
  projectId: "kolabo-app",
  storageBucket: "kolabo-app.appspot.com",
  messagingSenderId: "945147674348",
  appId: "1:945147674348:ios:247f86b2acb2a3e3ea2fc9",

};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;