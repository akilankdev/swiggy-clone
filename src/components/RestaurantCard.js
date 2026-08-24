import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    imageLink,
    sla,
    cloudinaryImageId,
  } = resData?.info; //Optional Chaining.
  return (
    <div className="res-card  w-50 m-4 p-4 bg-gray-100 hover:bg-gray-200 rounded">
      <img
        className="res-logo rounded"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        onError={(e) => {
          e.target.src = "https://dummyimage.com/300x200/cccccc/000000&text=No+Image";
        }}
      />
      <h3 className="text-xl font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 py-1 px-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
