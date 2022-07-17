import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const Sigin = () => {
    const logGoogleUser =  async () => {
        const response = await signInWithGooglePopup();
        const userDocref = await createUserDocumentFromAuth(response.user);
    }

    return(
        <div>
            <h1>Sigin Page</h1>
            <button onClick={logGoogleUser}>log in</button>
        </div>
    )
}

export default Sigin;