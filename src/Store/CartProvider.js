import { React } from "react";
import CartContext from "./CartContext.js";
import { useReducer } from "react";
const DefaultCartState = {
  Items: [],
  TotalAmount: 0,
};
const CartReducer = (state, action) => {
  if (action.type === "ADD") {
    const NewTotalAmount =
      state.TotalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.Items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.Items[existingCartItemIndex];
    let UpdateState;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      UpdateState = [...state.Items];
      UpdateState[existingCartItemIndex] = updateItem;
    } else {
      UpdateState = state.Items.concat(action.item);
    }
    return {
      Items: UpdateState,
      TotalAmount: NewTotalAmount,
    };
  }
  if (action.type === "ADDONEITEM") {
    const existingCartItemIndex = state.Items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.Items[existingCartItemIndex];
    let UpdateState;
    let NewTotalAmount;
    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      NewTotalAmount=state.TotalAmount+updateItem.price;
      UpdateState = [...state.Items];
      UpdateState[existingCartItemIndex] = updateItem;
    } 
      return {
        Items: UpdateState,
        TotalAmount: NewTotalAmount,
      }; 
  }
  if (action.type === "REMOVE") {
    let NewTotalAmount = state.TotalAmount;
    if (state.Items.length === 0) {
      NewTotalAmount = 0;
    }
    const CartAmountIndex = state.Items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartAmount = state.Items[CartAmountIndex];
    let UpdateState;
    if (existingCartAmount.amount > 1) {
      NewTotalAmount = NewTotalAmount - existingCartAmount.price
      const updateItem = {
        ...existingCartAmount,
        amount: existingCartAmount.amount - 1,
      };
      UpdateState = [...state.Items];
      UpdateState[CartAmountIndex] = updateItem;
    } else {
      NewTotalAmount = NewTotalAmount - existingCartAmount.price;
      UpdateState = state.Items.filter((item) => {
        return item.id != action.id;
      });
    }
    return {
      Items: UpdateState,
      TotalAmount: NewTotalAmount,
    };
  }
  return DefaultCartState;
};
const CartProvider = (props) => {
  const [CartState, DispatchCartAction] = useReducer(
    CartReducer,
    DefaultCartState
  );
  const AddItemHandler = (item) => {
    DispatchCartAction({ type: "ADD", item: item });
  };
  const RemoveItemHandler = (id) => {
    DispatchCartAction({ type: "REMOVE", id: id });
  };
  const AddOneItemHandler=(item)=>{
    DispatchCartAction({type:"ADDONEITEM",item:item})
  }
  const cartContext = {
    Items: CartState.Items,
    TotalAmount: CartState.TotalAmount,
    AddItem: AddItemHandler,
    AddOneItem:AddOneItemHandler,
    RemoveItem: RemoveItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
