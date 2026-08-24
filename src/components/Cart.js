import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart} from "../utils/cartSlice.js";
const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="text-center">
      <h1 className="p-4 m-4 text-xl font-bold">Cart</h1>
      <button
        className="bg-gray-100 border-black border-2 rounded-md py-1 px-2 cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && (<h2 className="m-3">The Cart is empty.Add items to the cart.</h2 >)}
      <div className="w-6/12 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
