import {CartIconContainer, ItemCount, ShoppingSvgIcon} from  './cart-icon.styles.jsx';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const {show, setShow, cartCount} = useContext(CartContext);
    const onClickCartIcon = () => setShow(!show);
    return (
        <CartIconContainer>
            <ShoppingSvgIcon onClick={()=> onClickCartIcon()}/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;