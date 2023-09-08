import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./";

describe("Tests for the Navbar Component", () => {
  it("renders without errors", () => {
    const { getByAltText, container } = render(<Navbar />);
    const logo = getByAltText("NEZA LOGO");
    expect(logo).toBeInTheDocument();
    const menuIcon = container.querySelector(".nav-toggle"); 
    expect(menuIcon).toBeInTheDocument();
    const navbarLinks = container.querySelector(".nav-items"); 
    expect(navbarLinks).not.toHaveClass("open"); 
  });
  
  it("toggle", () => {
    const { container } = render(<Navbar />);
    const menuIcon = container.querySelector(".nav-toggle");
    const navbarLinks = container.querySelector(".nav-items");

    expect(navbarLinks).not.toHaveClass("open");
    fireEvent.click(menuIcon);
    expect(navbarLinks).toHaveClass("open"); 
  });
});