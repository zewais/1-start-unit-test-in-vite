//import render to render the component on a virtual DOM
//import screen to capture elements from the virtual DOM
import { render, screen } from "@testing-library/react";
//import the react component needing testing
import MainComponent from "../src/MainComponant";
//import expect from the vitest library
import { expect } from "vitest";

test("MainComponent contains a <p> with correct text", () => {
  render(<MainComponent />); //first line in DOM testing is to render the component
  const paragraphElement = screen.getByText(/text/i); //Grab the component from the virtual screen
  expect(paragraphElement).toBeInTheDocument();
});

test("MainComponent contains a Heading element", () => {
  render(<MainComponent />);
  //use getByRole better to use the accessibilty features of the DOM
  //For more check MDN, https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
