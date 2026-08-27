import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import { toBeInTheDocument } from "@testing-library/jest-dom";

//describe() is used to group test cases.

describe("Contact us test cases", () => {
  //We can also use 'it' keyword instead of 'test',both are the same and works the same.
  it("Should render contact component into DOM", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Should Submit text exist in contact component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  it("Should 2 input boxes exist in contact component", () => {
    render(<Contact />);
    //Quering
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
  });
});
