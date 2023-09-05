tests.jsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";
describe("Navbar Component", () => {
  it("renders without errors", () => {
    const { getByAltText, getByTestId } = render(<Navbar />);
    const logo = getByAltText("NEZA LOGO");
    expect(logo).toBeInTheDocument();
    const menuIcon = getByTestId("menu-icon");
    expect(menuIcon).toBeInTheDocument();
    const navbarLinks = getByTestId("navbar-links");
    expect(navbarLinks).toHaveClass("navbar-links");
    expect(navbarLinks).not.toHaveClass("show");
  });
  it("toggles the menu when the menu icon is clicked", () => {
    const { getByTestId } = render(<Navbar />);
    const menuIcon = getByTestId("menu-icon");
    const navbarLinks = getByTestId("navbar-links");
    fireEvent.click(menuIcon);
    expect(navbarLinks).toHaveClass("show");
    fireEvent.click(menuIcon);
    expect(navbarLinks).not.toHaveClass("show");
  });
});