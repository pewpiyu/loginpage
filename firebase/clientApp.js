import * as firebase from "firebase/app";

const clientCredentials = {
  //   apikey: process.env.NEXT_PUBLIC_APIKEY,
  //   authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  //   projectId: process.env.NEXT_PUBLIC_PROJECTID,
  //   storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  //   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  //   appId: process.env.NEXT_PUBLIC_APPID,
  //   measurementId: process.env.NEXT_PUBLIC_MEASUREMENTID,
  apiKey: "AIzaSyDsfpglkz2SX8mtzlDe57FFxk2PgMgJ2A8",
  authDomain: "loginform-dc3b5.firebaseapp.com",
  projectId: "loginform-dc3b5",
  storageBucket: "loginform-dc3b5.appspot.com",
  messagingSenderId: "122558848069",
  appId: "1:122558848069:web:5d458710af560b9071d72c",
  measurementId: "G-295ELJ63Q3",
};

firebase.initializeApp(clientCredentials);

export default firebase;
