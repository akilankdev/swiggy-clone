import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,showItems,setShowItems,index,showIndex }) => {

  const handleClick = () => {
    //this will call the setShowIndex(index) in the parent.
    //user clicks first accordion => showIndex:0(expanded) then user clicks it again,the condition checks whether this accordion's index and showIndex value is same,if its same then replace 0 with NULL for showIndex so that it collapses.But if they are different,that means user clicked a new accordion, then update the showIndex value and it collapses the current one and expands the new accordion.
    setShowItems(showIndex === index? null : index)
  }
  return (
    <div>
      {/* w-6/12 is used to allocate half the width because tailwind divides page into 12 sections. */}

      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-sm">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
      
        { showItems && <ItemList items={data.itemCards} showAddButton={true}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
