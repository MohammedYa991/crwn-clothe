import {initializeApp} from 'firebase/app';
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA-NjfPFR9__iXAvo0_kWMazcpPjnw_ftQ",
    authDomain: "crwn-clothing-db-a7492.firebaseapp.com",
    projectId: "crwn-clothing-db-a7492",
    storageBucket: "crwn-clothing-db-a7492.appspot.com",
    messagingSenderId: "266934848018",
    appId: "1:266934848018:web:b9cefc04ae08d050b5a6cb"
  
  };

  initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();

  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

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

  export const createAuthUserWithEmailAndPassword = async (email, kennwort) => {
    if(!email || !kennwort){
      console.log('Entweder Email oder Kennwort ist leer!');
      return;
    }
    return await createUserWithEmailAndPassword(auth, email, kennwort)
  } 