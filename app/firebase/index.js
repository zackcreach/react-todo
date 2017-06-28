import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyC1GBY5Bc6dz-2fIVGcfJ8oAIcQaTxhefc",
    authDomain: "creach-todo-app-fc51b.firebaseapp.com",
    databaseURL: "https://creach-todo-app-fc51b.firebaseio.com",
    projectId: "creach-todo-app-fc51b",
    storageBucket: "creach-todo-app-fc51b.appspot.com",
    messagingSenderId: "832634864266"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
