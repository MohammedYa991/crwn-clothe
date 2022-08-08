import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './checkout-item.styles.scss';

const CheckoutItem = ({CheckoutItem}) => {
    const {imageUrl, name, quantity, price} = CheckoutItem;
    const {removeChecoutItem, addItemToCart, decreaseChecoutItem} = useContext(CartContext);
    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt = {name}/>
            </div>
            <div className='name'>
                {name}
            </div>
            <div className='quantity'>
                <span className='arrow' onClick={()=> addItemToCart(CheckoutItem)}>&lt;</span>
                <span className='value '>{quantity}</span>
                <span className='arrow' onClick={()=> decreaseChecoutItem(CheckoutItem)}>&gt;</span>
            </div>
            <div className='price'>
                {price}
            </div>
            <div className='remove-button' onClick={()=> removeChecoutItem(CheckoutItem) }>X</div>
        </div>
    );
}

export default CheckoutItem;