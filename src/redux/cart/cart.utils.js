//cartITems은 지금 아이템 toAdd는 추가될 것
export const addItemToCart = (cartItems, cartITemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartITemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartITemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartITemToAdd, quantity: 1 }];
};
