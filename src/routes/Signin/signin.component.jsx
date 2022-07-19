import {signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sing-up-form/sign-up-form.component';
import { Fragment } from 'react';

const Sigin = () => {    
    const logGoogleUser =  async () => {
        const response = await signInWithGooglePopup();
        const userDocref = await createUserDocumentFromAuth(response.user);
        console.log(userDocref);
    }

    return(
        <Fragment>
            <div>
                <h1>Sigin Page</h1>
                <button onClick={logGoogleUser}>log in</button>
            </div>
            <div>
                <SignUpForm/>
            </div>
        </Fragment>
    )
}

export default Sigin;