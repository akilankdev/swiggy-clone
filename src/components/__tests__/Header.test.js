import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js";
import { MemoryRouter } from "react-router-dom";
import {toBeInTheDocument} from "@testing-library/jest-dom";

it("should render Header component with a login button", () => {
  //Provider for recognizing useSelector() and MemoryRouter for recognizing <Link>.Those are from different library thats why jest-dom cant understand them.
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>,
  );
  const loginButton = screen.getByRole("button",{name: "Login"});
  expect(loginButton).toBeInTheDocument();

});

it("should render Header component with 'Cart' text", () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>,
  );
  //Regex can also be used to search text.We are searching for "Cart" text.
  const cartText = screen.getByText(/Cart/);
  expect(cartText).toBeInTheDocument();

});

it("should change Login to Logout on click", () => {
  render(
    <Provider store={appStore}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>,
  );
  const loginButton = screen.getByRole("button",{name: "Login"});
  //Simulating click event on Login button.
  fireEvent.click(loginButton)
  const logoutButton = screen.getByRole("button",{name: "Logout"});
  expect(logoutButton).toBeInTheDocument();

});
