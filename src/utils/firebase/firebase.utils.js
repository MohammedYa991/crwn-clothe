import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-NjfPFR9__iXAvo0_kWMazcpPjnw_ftQ",
    authDomain: "crwn-clothing-db-a7492.firebaseapp.com",
    projectId: "crwn-clothing-db-a7492",
    storageBucket: "crwn-clothing-db-a7492.appspot.com",
    messagingSenderId: "266934848018",
    appId: "1:266934848018:web:b9cefc04ae08d050b5a6cb"
  
  };

  const firebaseaApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid); 
    const userSnapShot = await getDoc(userDocRef);
    if(!userSnapShot.exists()) {
      const {displayName, email} = userAuth;
      const creatAt = new Date();
      try {
        await setDoc(userDocRef, {displayName, email, creatAt});
      }
      catch (error) {
        console.log(`User kann nicht erstellt werden. einen Fehler ist aufgetreten${error.message}`);
      }
    }
    return userDocRef;
  }