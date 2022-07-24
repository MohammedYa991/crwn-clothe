import { useState, useContext } from "react";
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import './sign-up-form-styles.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    kennwort: '',
    kennwortBestaetigung: '',
}

const SignUpForm = ()=> {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, kennwort, kennwortBestaetigung} = formFields;
    const eventHandler = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]:value});
    }
    const restFormFileds = () => {
        setFormFields({...defaultFormFields});
    }

    const handelSubmit =  async(event)=> {
        event.preventDefault();
        if(kennwort !== kennwortBestaetigung){
            alert('Kennwort und Kennwortbestätigung sind nicht gleich!');
            return;
        }
        try {
          const { user } = await createAuthUserWithEmailAndPassword(email, kennwort);
          user.displayName = displayName;
           await createUserDocumentFromAuth(user, displayName);
           restFormFileds();
        }
        catch(error) {
            console.log(`beim Registrieren ist ein Fehler aufgetreten ${error.message}`);
        }
    }

    return (
    <div className="sign-up-container">
        <h2>Kein Account</h2>
        <span>Registrieren</span>
        <form onSubmit={(event)=>{handelSubmit(event);}}>
            <FormInput label={'Name'} type='text' required onChange={eventHandler} name='displayName' value= {displayName} />
            <FormInput label={'Email'} type='email' required onChange={eventHandler} name='email' value= {email} />
            <FormInput label={'Kennwort'} type='password' required onChange={eventHandler} name='kennwort' value= {kennwort} />
            <FormInput label={'Kennwortbestätigung'} type='password' required onChange={eventHandler} name='kennwortBestaetigung' value= {kennwortBestaetigung} />
            <Button childern={'Registrieren'} buttonType={'inverted'} type="submit"/>
        </form>
    </div>)
}

export default SignUpForm;