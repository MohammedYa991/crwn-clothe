import { useState, useContext } from "react";
import {signInAuthWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-in-form-styles.scss';

const defaultFormFields = {
    email: '',
    kennwort: '',
}

const SignInForm = ()=> {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, kennwort } = formFields;

    const eventHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }
    const restFormFileds = () => {
        setFormFields({...defaultFormFields});
    }

    const handelSubmit =  async(event)=> {
        event.preventDefault();
        try {
           await signInAuthWithEmailAndPassword(email, kennwort );
           restFormFileds();
        }
        catch(error) {
            alert(`beim Anmelden ist ein Fehler aufgetreten ${error.message}`);
        }
    }

    const logGoogleUser =  async () => {
        await signInWithGooglePopup();
    }


    return (
    <div className='sign-in-container'>
        <h2>Sie haben schon ein Account</h2>
        <span>Anmelden</span>
        <form onSubmit={(event)=>{handelSubmit(event);}}>
            <FormInput label={'Email'} type='email' required onChange={eventHandler} name='email' value= {email} />
            <FormInput label={'Kennwort'} type='password' required onChange={eventHandler} name='kennwort' value= {kennwort} />
            <div className='buttons-container'>
                <Button childern={'Anmelden'} buttonType={'inverted'} type="submit"/>
                <Button childern={'Anmelden mit Google'} buttonType={'google'} type="button" onClick={logGoogleUser}/>
            </div>
        </form>
    </div>)
}

export default SignInForm;