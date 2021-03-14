// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';


const config = {
    apiKey: 'AIzaSyCyj3AzmjzZLH8PkvyrJTAVhRO49n95s3A',
    authDomain: 'refrigerationversification.firebaseapp.com',
    databaseURL: 'https://refrigerationversification-default-rtdb.firebaseio.com',
    projectId: 'refrigerationversification',
    storageBucket: 'refrigerationversification.appspot.com',
    messagingSenderId: '470943489399',
    appId: '1:470943489399:web:af41407b53ff3bd9b2d572'
};


firebase.initializeApp(config);


export default firebase;