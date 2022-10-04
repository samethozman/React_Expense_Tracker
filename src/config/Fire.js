import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB2_U9qkdKIFXoHYj-549rhWrPPLwKEdNc",
    authDomain: "react-expense-tracker-f2231.firebaseapp.com",
    projectId: "react-expense-tracker-f2231",
    storageBucket: "react-expense-tracker-f2231.appspot.com",
    messagingSenderId: "330750197117",
    appId: "1:330750197117:web:dff51826299f5c4b1e2014",
    measurementId: "G-C3DNH2GK9R"
};

const fire = firebase.initializeApp(config);
export default fire;