
 export const addToCart = (cartArray, cartItemToAdd ) => {
     const existingCartItem = cartArray.find(
      cartItem => cartItem.id === cartItemToAdd.id 
      )
      if(existingCartItem){
          return cartArray.map( cartItem => 
            cartItem.id === cartItemToAdd.id ?
            {...cartItem, quantity : cartItem.quantity + 1}
            : cartItem
          )
      }
   
      
       return  [...cartArray, {...cartItemToAdd, quantity : 1}]
}

export const removeFromCart = (cartItems, cartItemToRemove) => {
   const index = cartItems.indexOf(cartItemToRemove)
   cartItems.splice(index,1)
   return cartItems
}