import Body from "../Body";
import { render } from "@testing-library/react";
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
});
