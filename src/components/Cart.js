import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center">
      <h1 className="p-4 m-4 text-xl">Cart</h1>
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
}

export default Cart;