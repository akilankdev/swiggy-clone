import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import { toBeInTheDocument } from "@testing-library/jest-dom";

describe("Contact us test cases", () => {
  beforeAll(() => {
    console.log("Before all");
  });
  beforeEach(() => {
    console.log("Before each");
  });
  afterAll(() => {
    console.log("After all");
  });
  afterEach(() => {
    console.log("After each");
  });
  
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
