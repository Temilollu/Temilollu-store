import { addToCart, removeFromCart } from './cart-utils'

const INITIAL_STATE = {
    cartItems : [] ,
    show : false
 }
 
  const cartReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case 'CART_ITEMS':
                return {
                    ...state,
                    cartItems : addToCart([...state.cartItems], action.payload)  
                }
                case 'REMOVE_CART_ITEM': 
                return {
                    ...state,
                   cartItems : removeFromCart([...state.cartItems], action.payload)  
                }
            default:
            return state
        }
    }
 
    export default cartReducer
