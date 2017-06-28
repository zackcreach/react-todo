import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC1GBY5Bc6dz-2fIVGcfJ8oAIcQaTxhefc",
  authDomain: "creach-todo-app-fc51b.firebaseapp.com",
  databaseURL: "https://creach-todo-app-fc51b.firebaseio.com",
  projectId: "creach-todo-app-fc51b",
  storageBucket: "creach-todo-app-fc51b.appspot.com",
  messagingSenderId: "832634864266"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0'
  },
  isRunning: true,
  user: {
    name: 'Zack',
    age: 30
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added', snapshot.key, snapshot.val());
});

// notesRef.on('child_changed', (snapshot) => {
//   console.log('child_changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child_removed', snapshot.key, snapshot.val());
// });

todosRef.push({
  text: 'Here\'s a new todo'
});

todosRef.push({
  text: 'And a second todo!'
});
