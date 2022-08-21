import {Outlet} from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo }  from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { logOut } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import  {NavigationContainer , LogoContainer, NavLinksContainer, NavLink} from './navigation.styles';

const Navigation = () => {
    const {show} = useContext(CartContext);
    const {currentUser} = useContext(UserContext);

    return (
    <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrwnLogo className="logo"/>
            </LogoContainer>
            <NavLinksContainer>
            <NavLink  to="/shop">Shop</NavLink>
                {
                    currentUser ? (<NavLink as='span' onClick = { async ()=> await logOut()}>Logout</NavLink>) : (<NavLink  to="/auth">Sign in</NavLink>)
                }
                <CartIcon />
            </NavLinksContainer>
            {show && <CartDropDown />}
        </NavigationContainer>
        <Outlet/>
    </Fragment>)
}

export default Navigation;