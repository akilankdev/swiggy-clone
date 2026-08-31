import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";


const RestaurantMenu = () => {

  //hold the index of the component whose accordion header is clicked by the user.
  const [showIndex,setShowIndex] = useState(null);
  
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    areaName,
    avgRatingString,
    costForTwoMessage,
    cuisines,
    locality,
    sla,
    totalRatingsString,
  } = resInfo?.data?.cards[2]?.card?.card?.info || {};

  //Gets Category array
  const cards =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards || [];
  //Filters the empty categories.
  const categories = cards.filter((category) => category?.card?.card?.title);

  return (
    <div className="text-center">
      <h1 className="font-bold m-6 text-2xl">{name}</h1>
      <h2 className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </h2>
      {categories.map((category,index) => 
        <RestaurantCategory 
        key={category?.card?.card?.title}
        data={category?.card?.card}
        index={index}
        //We are passing showIndex because for collapsing the currently expanded accordion leaving every accordion collapsed again.
        showIndex={showIndex}
        showItems={index === showIndex && true}
        setShowItems={setShowIndex}
        /> )}
    </div>
  );
};

export default RestaurantMenu;
