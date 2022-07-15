import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC2zm5HR5FoZlhN2QDkdma0AljvjyRRDeA",
    authDomain: "netflixclone-d58f9.firebaseapp.com",
    databaseURL: "https://netflixclone-d58f9.firebaseio.com",
    projectId: "netflixclone-d58f9",
    storageBucket: "netflixclone-d58f9.appspot.com",
    messagingSenderId: "985978508504",
    appId: "1:985978508504:web:37a3ab74ccb0ee29a073ad"
};

firebase.initializeApp(config);




export default  firebase 