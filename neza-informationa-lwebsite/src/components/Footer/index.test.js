import React from "react";
import { render } from "@testing-library/react";
import Footer from ".";


describe("Test for the footer component", () => {

  it("The footer component and its content renders well", () => {
    const { container , getByAltText} = render(<Footer />);

    const logo = getByAltText ("NEZA LOGO");
    expect(logo).toBeInTheDocument();

    const whoWeAreLink = container.querySelector("a[href='/']");
    expect(whoWeAreLink).toBeInTheDocument();

    const contactUsLink = container.querySelector("a[href='/']");
    expect(contactUsLink).toBeInTheDocument();
   
    const connectWithUsLink = container.querySelector("a[href='/']");
    expect(connectWithUsLink).toBeInTheDocument();
  
  });
  it("contains contact information", () => {
    const { getByText } = render(<Footer />);

    const email = getByText("tinywellness@gmail.com");
    const phoneNumber = getByText("+25470756960");

    expect(email).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
  });
});















