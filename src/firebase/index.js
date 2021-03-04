import firebase from 'firebase/app';
import '@firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBpteUQqZ7kKiNgccbbMEaXH9V0cRREnRI',
    authDomain: 'toio-maderas.firebaseapp.com',
    projectId: 'toio-maderas',
    storageBucket: 'toio-maderas.appspot.com',
    messagingSenderId: '1053278755271',
    appId: '1:1053278755271:web:db81973a1e55defdfba1e2',
    measurementId: 'G-KQ9FL3QVQC',
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export const getFireBase = () => {
    return app;
};

export const getFireStore = () => {
    return firebase.firestore(app);
};
