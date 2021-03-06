import {Outlet, Link} from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo }  from '../../assets/crown.svg';
import './navigation.styles.scss'

const Navigation = () => {
    return (
    <Fragment>
        <div className="navigation">
            <Link to='/' className="logo-container">
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link  to="/shop" className="nav-link">Shop</Link>
                <Link  to="/signIn" className="nav-link">Sign in</Link>
            </div>
        </div>
        <Outlet/>
    </Fragment>)
}

export default Navigation;