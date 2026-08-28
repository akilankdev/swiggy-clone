import RestaurantCard from "../RestaurantCard";
import { render,screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

it("should render RestaurantCard component with props data", ()=> {
  render(<RestaurantCard resData={MOCK_DATA}/>)
  const resName = screen.getByText("Pizza Paradise");
  expect(resName).toBeInTheDocument();
});


//Higher Order Component
const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

it("should render RestaurantCardPromoted component with Promoted label", ()=> {
  //Make sure if the MOCK_DATA has promoted field in it.
  render(<RestaurantCardPromoted resData={MOCK_DATA}/>)
  const promotedLabel = screen.getByText("Promoted");
  expect(promotedLabel).toBeInTheDocument();
});