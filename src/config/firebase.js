  import * as firebase from 'firebase';
  import 'firebase/auth';

// Initialize Firebase
  const config = {
      apiKey: 'AIzaSyAjwYRbPpKEEvPumL-3oBO3E3mBQLVvGsU',
      authDomain: 'boomtown-df72a.firebaseapp.com',
      databaseURL: 'https://boomtown-df72a.firebaseio.com',
      projectId: 'boomtown-df72a',
      storageBucket: 'boomtown-df72a.appspot.com',
      messagingSenderId: '960055542838'
  };

  const FirebaseApp = firebase.initializeApp(config);
  const FirebaseAuth = FirebaseApp.auth();
  const FirebaseDB = firebase.database();
  const FirebaseStorage = firebase.storage(FirebaseApp);

  export {
    FirebaseApp,
    FirebaseAuth,
    FirebaseDB,
    FirebaseStorage
  };
