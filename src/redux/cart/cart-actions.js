

export const cartAction = shop => ({
    type : 'CART_ITEMS',
    payload : shop
})

export const removeFromCart = remove => ({
    type : 'REMOVE_CART_ITEM',
    payload : remove
})
