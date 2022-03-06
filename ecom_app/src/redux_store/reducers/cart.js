const init = {};

const myCart = [];

const cart = (state = init, action) => {
  if (action.type === "AddToCart") {
    myCart.push(action.payload);
    return myCart;
  } else {
    return myCart;
  }
};
export default cart;
