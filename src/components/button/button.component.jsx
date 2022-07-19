import './button.styles.scss'
const Button =  ({childern, buttonType, ...props}) => {
    const BUTTON_TYPE_CLASSES = {
        google: 'google',
        inverted: 'inverted'
    }

    return (<button className = {`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...props}>{childern}</button>)
}

export default Button;