
  import firebase from 'firebase'
  
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBpEzR2iTULl5Bvgsbg8gML_21cCGok9Os",
    authDomain: "vueproyecto-3ba66.firebaseapp.com",
    projectId: "vueproyecto-3ba66",
    storageBucket: "vueproyecto-3ba66.appspot.com",
    messagingSenderId: "995504859900",
    appId: "1:995504859900:web:b122796295f5231681c579"
  };
  // Initialize Firebase
  const firebaseapp= firebase.initializeApp(firebaseConfig);
  firebaseapp.firestore().settings({timestampsInSnapshots:true});

  export default firebaseapp.firestore();