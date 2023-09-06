import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Product from './';

describe("Product component", () => {
  it("renders the component correctly", async() => {
    render(<Product />);
  
    await waitFor(() => {
    expect(screen.getByText("The TinyLife Wellness")).toBeInTheDocument();
    expect(screen.getByText("Tinylife Wellness is a predictive model")).toBeInTheDocument();
    expect(screen.getByAltText("web portal")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Register" })).toBeInTheDocument();
    expect(screen.getByTestId("slideshow")).toBeInTheDocument();
  });
});

});
    
       