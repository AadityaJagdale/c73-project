import firebase from 'firebase';
require("@firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyCzZkrpPDF4Or5UV5SRacti6yyY189hznQ",
    authDomain: "c71-project-7855a.firebaseapp.com",
    projectId: "c71-project-7855a",
    storageBucket: "c71-project-7855a.appspot.com",
    messagingSenderId: "686673755650",
    appId: "1:686673755650:web:55161a7ba2d10ad514711b"
  };
  // Initialize Firebase
 if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();

