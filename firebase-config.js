
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaVfUfa7_dOGIgAWcd9mWl-F62KzZFJ_k",
    authDomain: "heathcare-mobile.firebaseapp.com",
    projectId: "heathcare-mobile",
    storageBucket: "heathcare-mobile.appspot.com",
    messagingSenderId: "891962819893",
    appId: "1:891962819893:web:b28ee90349d78c4802f87c",
    measurementId: "G-N2VD3JG684"
};


const getDatabase = () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    return db
}
export { getDatabase };


const getConnection = () => {
    const app = initializeApp(firebaseConfig);
    return app
}
export { getConnection };
