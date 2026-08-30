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

it("should render Body component with search button", async () => {
  await act(async () =>
    render(
      <MemoryRouter>
        <Body />
      </MemoryRouter>,
    ),
  );

  const searchInput = screen.getByTestId("searchBar");
  //This will trigger the onChange in the <input> element.
  fireEvent.change(searchInput, { target: { value: "spice" } });

  // expect(searchInput).toHaveValue("spice");/
  //Clicking the search button
  const searchButton = screen.getByRole("button",{name:"Search"});
  fireEvent.click(searchButton);

  //Checking whether "spice" input renders 2 Restaurant cards.
  const resList = screen.getAllByTestId("resCard");
  expect(resList.length).toBe(2);
  //test will pass
});
