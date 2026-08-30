import { RESTAURANT_LIST_API } from "./constants";
import { useState, useEffect } from "react";

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  //List is fetched only once.
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
   try {
      const data = await fetch(RESTAURANT_LIST_API);
      const json = await data.json();

      const restaurants =
        json.data.data.cards[1].card.card.gridElements.infoWithStyle
          .restaurants;
      
      //adding promoted field for showing promoted label in some cards.
      const updatedRestaurants = restaurants.map((restaurant, index) => ({
        ...restaurant,
        info: {
          ...restaurant.info,
          promoted: index < 4,
        },
      }));

      setListOfRestaurants(updatedRestaurants);
    } 
    catch (err) {
      console.error("ERROR :", err);
    }
  };
  return listOfRestaurants;
};

export default useRestaurantList;
