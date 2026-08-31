import { render, screen, fireEvent } from "@testing-library/react";
import RestaurantMenuPage from "../RestaurantMenu";
import MOCK_MENU_DATA from "../mocks/resMenuMock.json";
import { act } from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_MENU_DATA);
    },
  });
});

it("Should add items to the cart and update Header, and Cart page", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenuPage />
      </Provider>,
    ),
  );
  //Just checking whether we properly rendered the Menu page before we start testing the Add to cart Feature.
  const restaurantName = screen.getByText("Green Bites");
  //Checking if restaurant details are properly rendered.
  expect(restaurantName).toBeInTheDocument();
  //gets the 1st Accordion's Header
  const accordionHeader = screen.getByText("Signature Salads (3)");
  //Expands the accordion body
  fireEvent.click(accordionHeader);
  //checking if 3 food items are there after expanding.
  expect(screen.getAllByTestId("foodItem").length).toBe(3);
});
