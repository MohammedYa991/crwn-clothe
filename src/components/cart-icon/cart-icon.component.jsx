import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartIcon = () => {
    const {show, setShow} = useContext(CartContext);
    const onClickCartIcon = () => setShow(!show);
    return (
        <div className='cart-icon-container'>
            <ShoppingIcon className='shopping-icon' onClick={()=> onClickCartIcon()}/>
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;