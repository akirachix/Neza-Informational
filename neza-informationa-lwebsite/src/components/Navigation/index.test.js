import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./";

describe("Tests for the Navbar Component", () => {
  it("renders without errors", () => {
    const { getByAltText, container } = render(<Navbar />);
    const logo = getByAltText("NEZA LOGO");
    expect(logo).toBeInTheDocument();
    const menuIcon = container.querySelector(".menu-icon");
    expect(menuIcon).toBeInTheDocument();
    const navbarLinks = container.querySelector(".navbar-links");
    expect(navbarLinks).toHaveClass("navbar-links");
    expect(navbarLinks).not.toHaveClass("show");
  });
  
  it("toggle", () => {
    const { container } = render(<Navbar />);
    const menuIcon = container.querySelector(".menu-icon");
    const navbarLinks = container.querySelector(".navbar-links");

    expect(navbarLinks).not.toHaveClass("show");
    fireEvent.click(menuIcon);
    expect(navbarLinks).toHaveClass("show");
  });
});
