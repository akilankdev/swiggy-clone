import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header.js";
import RestaurantMenu from "../RestaurantMenu";
import Cart from "../Cart.js";
import MOCK_MENU_DATA from "../mocks/resMenuMock.json";
import { act } from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import appStore from "../../utils/appStore.js";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_MENU_DATA);
    },
  });
});

it("Should render restaurant Menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>,
    ),
  );

  const restaurantName = screen.getByText("Green Bites");
  expect(restaurantName).toBeInTheDocument();
});

it("should expand accordion when accordion header is clicked", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>,
    ),
  );
  const accordionHeader = screen.getByText("Signature Salads (3)");
  fireEvent.click(accordionHeader);
  //checking if 3 food items are there after expanding.
  expect(screen.getAllByTestId("foodItem").length).toBe(3);
});

it("should add items to cart and update the Header cart count", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
        <RestaurantMenu />
        <Cart />
      </Provider>,
    ),
  );
  const accordionHeader = screen.getByText("Signature Salads (3)");
  fireEvent.click(accordionHeader);
  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  expect(addBtns.length).toBe(3);
  expect(screen.getByText("Cart - 0 items")).toBeInTheDocument();
  //Clicks the 1st add button
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - 1 items")).toBeInTheDocument();
  //Clicks the 2nd add button
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - 2 items")).toBeInTheDocument();

  //Checking if Cart page is rendered
  expect(screen.getByText("Clear Cart")).toBeInTheDocument();
  //<ItemList> is used to display food items in both Menu and Cart page.SO now combining them both should give me 5 food items in total.Thats what we are checking here.
  expect(screen.getAllByTestId("foodItem").length).toBe(5);
});
