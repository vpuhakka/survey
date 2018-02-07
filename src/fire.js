import firebase from 'firebase';

//<script src="https://www.gstatic.com/firebasejs/4.9.1/firebase.js"></script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA-UEBtljOESZF0YDjSNKe60NeqE47q_Yo",
    authDomain: "survey-ac6a8.firebaseapp.com",
    databaseURL: "https://survey-ac6a8.firebaseio.com",
    projectId: "survey-ac6a8",
    storageBucket: "",
    messagingSenderId: "1039666720886"
  };
  var fire = firebase.initializeApp(config);    
  
  defaultStorage = firebase.storage();
  defaultDatabase = firebase.database();
export default fire;