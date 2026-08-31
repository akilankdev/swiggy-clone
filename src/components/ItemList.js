import { CDN_URL } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice.js";

const ItemList = ({ items }) => {

  //We need useDispatch() to dispatch an action.
  const dispatch = useDispatch();
  const handleAddItem = (item)=> {
    //Adding the specific menu item's info into the array when the btn is clicked
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItem"
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left"
        >
          <div className="flex justify-between">
            <div>
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price / 100}</span>
              </div>
              <p className="text-xs text-gray-600">{item.card.info.description}</p>
            </div>
            <div>
              <button className="absolute bg-black text-sm text-white ml-11 mt-10 rounded-sm p-0.5 cursor-pointer" onClick={() => handleAddItem(item)}>Add +</button>
              <img src={CDN_URL + item.card.info.imageId} className="w-24 "></img>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
