// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyDTRWE3_VOgHKqnBGw6jn7xGz4xAHg7Hao",
    authDomain: "bacc-2027.firebaseapp.com",
    projectId: "bacc-2027",
    storageBucket: "bacc-2027.firebasestorage.app",
    messagingSenderId: "273209899393",
    appId: "1:273209899393:web:fb47b08324450a5fa49080",
    measurementId: "G-DKVV6YCZNK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Auth instance
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
