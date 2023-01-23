import React from "react";
const CartContext = React.createContext({
  Items: [],
  TotalAmount: 0,
  AddItem: (item) => {},
  AddOneItem:(item)=>{},
  RemoveItem: (id) => {},
});
export default CartContext;
