import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListMock.json";
import { act } from "react";
import { MemoryRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render 9 cards and after searching 'slice', render two cards", async () => {
  await act(async () =>
    render(
      <MemoryRouter>
        <Body />
      </MemoryRouter>,
    ),
  );

  //testing whether 9 restaurants cards are rendered before search.
  const cardBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardBeforeSearch.length).toBe(9);

  const searchInput = screen.getByTestId("searchBar");
  //This will trigger the onChange in the <input> element.
  fireEvent.change(searchInput, { target: { value: "spice" } });

  // expect(searchInput).toHaveValue("spice");/
  //Clicking the search button
  const searchButton = screen.getByRole("button",{name:"Search"});
  fireEvent.click(searchButton);

  //Checking whether "spice" input renders 2 Restaurant cards.
  const cardAfterSearch = screen.getAllByTestId("resCard");
  expect(cardAfterSearch.length).toBe(2);
  //test will pass
});
it("should filter Top rated restaurants",async ()=> {
  await act(async() => 
    render(
      <MemoryRouter>
        <Body />
      </MemoryRouter>
    )
  );
  //Whether every card is rendered
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(9)

  //Click the button
  const topRatedButton = screen.getByRole("button",{name: "Top-rated Restaurant"});
  fireEvent.click(topRatedButton);

  //Filters top rated
  const cardsAfterFilter = screen.getAllByTestId("resCard");
  expect(cardsAfterFilter.length).toBe(5)
});