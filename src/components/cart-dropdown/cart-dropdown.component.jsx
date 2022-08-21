import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {CartDropDownContainer, Cartitems} from './cart-dropdown.styles.jsx';

const CartDropDown = ()=> {
    const {cartItems}=useContext(CartContext);
    return(
        <CartDropDownContainer>
            <Cartitems>
                {cartItems.map((item)=> (<CartItem key={item.id} cartItem={item}/>))}
            </Cartitems>
            <Link to='/checkout'>
                <Button childern='zur Kasse gehen'/>
            </Link>
        </CartDropDownContainer>
    )
}

export default CartDropDown;