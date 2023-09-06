import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Slideshow from ".";

let container = null;

beforeEach(() => {
 
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
 
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders the correct number of slides", () => {
  act(() => {
    render(<Slideshow />, container);
  });
});


