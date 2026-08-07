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

// Firestore instance
const db = firebase.firestore();

// Admin emails (can access admin dashboard)
const ADMIN_EMAILS = [
    'krotreaksmey2200@gmail.com',
    // បន្ថែម email ផ្សេងទៀត...
];

// Check if user is admin
function isAdmin(user) {
    return user && ADMIN_EMAILS.includes(user.email);
}

// Log activity to Firestore
async function logActivity(action, page, extra = {}) {
    const user = auth.currentUser;
    if (!user) return;
    
    try {
        await db.collection('activity').add({
            action: action,
            userId: user.uid,
            userName: user.displayName,
            userEmail: user.email,
            userPhoto: user.photoURL,
            page: page,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            ...extra
        });
    } catch (err) {
        console.log('Activity log error:', err);
    }
}

// Save user info to Firestore
async function saveUser(user) {
    if (!user) return;
    
    try {
        await db.collection('users').doc(user.uid).set({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
            lastLogin: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    } catch (err) {
        console.log('Save user error:', err);
    }
}
