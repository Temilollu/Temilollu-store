import React from 'react';
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'

import  { removeFromCart } from '../../redux/cart/cart-actions'
const CartDropdown = ({items, removedItem, totalAmount}) => {

    return ( 
        <div className="cart-dropdown">
          <p className="total">Total : ${totalAmount.toFixed(2)}</p>
          { !items.length && <p className="empty-cart">No items in cart</p>}
                {
                    items.map(item => (
                 <div className='cart-items' key={item.id}>
                    <img src={item.image} alt=""/>
                    <div className="title_price">
                      <p>{item.title} <br/>
                       ${item.price} x {item.quantity} </p>
                    </div>
                    <p className='price' onClick={() => removedItem(item)} >X</p>
                    </div>
                    ))
                }
                <button className="cart-dropdown__button">Checkout</button>
            </div>
     );
}
const mapStateToProps = ({cart : {cartItems}}) => ({
    items :  cartItems,
    totalAmount : cartItems.reduce((accumulator, cartItems) => {
       return accumulator =  accumulator + cartItems.price * cartItems.quantity
    },0)
  })
  
  const mapDispatchToProps = dispatch => ({
   removedItem  : remove => dispatch(removeFromCart(remove))

  })
 
export default connect(mapStateToProps,mapDispatchToProps )(CartDropdown);