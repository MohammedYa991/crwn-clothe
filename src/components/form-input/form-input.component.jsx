import {Group, FormInputElement,FormInputLabel} from './form-input.styles.jsx';

const FormInput = ({label, ...props}) => {
    return (
    <Group>
        <FormInputElement {...props}/>
        {
            label && ( <FormInputLabel shrink={props.value.length}>{label}</FormInputLabel>)
        }
    </Group>    
    )
}

export default FormInput;