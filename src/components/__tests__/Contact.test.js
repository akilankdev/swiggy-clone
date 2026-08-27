import { render,screen } from "@testing-library/react";
import Contact from "../Contact";
import {toBeInTheDocument} from "@testing-library/jest-dom";

/* test("Should render contact component into DOM",() => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
*/
//would pass.
test("Should Submit text exist in contact component",() => {
  render(<Contact />);
  const button = screen.getByText("Submit");
  expect(button).toBeInTheDocument();
}); 
//would pass
test("Should 2 input boxes exist in contact component",() => {
  render(<Contact />);
  //Quering
  const inputBoxes = screen.getAllByRole("textbox");
  console.log(inputBoxes); //Displays the Array of two objects.Those objs are basically the virtual dom.
  //assertion
  expect(inputBoxes.length).toBe(2);
});