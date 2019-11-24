import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBvD4QwRF0Q2Z6tIU_WmXzBHAXGE4wwPeE",
    authDomain: "my-project916.firebaseapp.com",
    databaseURL: "https://my-project916.firebaseio.com",
    projectId: "my-project916",
    storageBucket: "my-project916.appspot.com",
    messagingSenderId: "960971490342",
    appId: "1:960971490342:web:6d79ee876011a50e9652e7",
    measurementId: "G-GTGXTJJRKM"
  })
}

export default firebase