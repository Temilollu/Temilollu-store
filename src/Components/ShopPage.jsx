import React from 'react';
 import {connect} from 'react-redux'
import { cartAction } from '../redux/cart/cart-actions'
const ShopPage = ({datum, cartCollection}) => {
  const { title } = datum
   const modifiedTitle =  title.split(' ').splice(0,7).join(' ')

    return ( 
        <div className="col mb-4">
        <div className="card">
          <img src={datum.image} className="card-img-top img-fluid shop-image" alt="..."/>
          <div className="card-body">
           <p>{modifiedTitle}</p>
           <div className="price_button">
              <p>${datum.price}</p>
            <button onClick={() => cartCollection(datum)}>Add to cart</button>
           </div>
           
          </div>
        </div>
      </div>
     );
}
const mapDispatchToProps = dispatch => ({
    cartCollection : cart => dispatch(cartAction(cart))
})
 
export default connect(null,mapDispatchToProps)(ShopPage);   
