import { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Menu from "./Components/Layout/Menu";
import MealsSummary from "./Components/Meals/MealsSummary";
import CartProvider from "./Store/CartProvider";

function App(){
  const [VisibleCart,SetVisibleCart]=useState(false);
  const ShowCartHandler=()=>{
    SetVisibleCart(true);
  };
  const HideCartHandler=()=>{
    SetVisibleCart(false);
  };
  return(
    <CartProvider>
     {VisibleCart && <Cart onhide={HideCartHandler}/>}
   <div><Header onshow={ShowCartHandler}></Header></div>
   <main id="main-wrap">
    <MealsSummary/>
    <Menu/>
   </main>
   </CartProvider>
  )
}
export default App;