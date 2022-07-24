import {Outlet, Link} from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo }  from '../../assets/crown.svg';
import './navigation.styles.scss'
import { UserContext } from "../../contexts/user.context";
import { logOut } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const {currentUser , setCurrentUser} = useContext(UserContext);
    const logOutHandler = async () => {
        try {  
            await logOut();
            setCurrentUser(null);
        }
        catch(e) {
            alert(`beim ausloggen ist ein Fehler aufgetreten ${e.message}`)
        }
    }
    return (
    <Fragment>
        <div className="navigation">
            <Link to='/' className="logo-container">
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link  to="/shop" className="nav-link">Shop</Link>
                {
                    currentUser ? (<span className='nav-link' onClick = { async ()=> await logOutHandler()}>Logout</span>) : (<Link  to="/auth" className="nav-link">Sign in</Link>)
                }
            </div>
        </div>
        <Outlet/>
    </Fragment>)
}

export default Navigation;