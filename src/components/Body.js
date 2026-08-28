import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import useRestaurantList from "../utils/useRestaurantList";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  
  //custom hook to fetch API data
  const listOfRestaurants = useRestaurantList();

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  //Higher order Component
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //we should include the state variable's value inside dependancy array.
  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  },[listOfRestaurants]);

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false)
    return (
      <h1>Looks like you are offline!Please check your internet connection.</h1>
    );

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            className="search-box border border-solid  border-black rounded ml-2"
            placeholder="Search for restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn bg-green-100 px-4 py-2 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn bg-gray-200 px-4 m-4 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating >= 4.5,
            );

            setFilteredRestaurants(filteredList);
          }}
        >
          Top-rated Restaurant
        </button>

        <button
          className="reset-filter bg-gray-200 px-4 m-4 rounded-lg"
          onClick={() => {
            setFilteredRestaurants(listOfRestaurants);
          }}
        >
          Reset filters
        </button>
      </div>
      {/* use square parentheses to hardcode specific values */}
      <div className="res-container flex flex-wrap ">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="restaurant-card-link"
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.promoted? <RestaurantCardPromoted resData={restaurant}/> : <RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
