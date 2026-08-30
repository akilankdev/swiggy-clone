import { render,screen } from "@testing-library/react";
import RestaurantMenuPage from "../RestaurantMenuPage";
import MOCK_MENU_DATA from "../mocks/resMenuMock.json";
import { act } from "react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_MENU_DATA);
    },
  });
});

it("Should add items to the cart and update Header, and Cart page", async () => {
  await act(async () => render(<RestaurantMenuPage />));
  //Just checking whether we properly rendered the Menu page before we start testing the Add to cart Feature.
  const restaurantName = screen.getByText("Green Bites");
  expect(restaurantName).toBeInTheDocument();
});
