import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';




const firebaseConfig = {
    apiKey: "AIzaSyBEdoI3RoQMUrrPp7-h3-J6G1uf-kePhCM",
    authDomain: "yt-clone007.firebaseapp.com",
    projectId: "yt-clone007",
    storageBucket: "yt-clone007.appspot.com",
    messagingSenderId: "932751498196",
    appId: "1:932751498196:web:1742106a07782eb76a5441"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.auth()

  