import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";
describe("Footer Component", () => {
  it("renders without errors", () => {
    const { getByAltText, getByText, getByTestId } = render(<Footer />);
    // Ensure the logo is rendered
    const logo = getByAltText("LOGO");
    expect(logo).toBeInTheDocument();
    // Ensure the "Who we are" section is rendered
    const whoWeAreLink = getByText("Who we are");
    expect(whoWeAreLink).toBeInTheDocument();
    // Ensure the "Contact Us" section is rendered
    const contactUsLink = getByText("Contact Us");
    expect(contactUsLink).toBeInTheDocument();
    // Ensure the "Connect With Us" section is rendered
    const connectWithUsLink = getByText("Connect With Us");
    expect(connectWithUsLink).toBeInTheDocument();
    // Ensure the LinkedIn icon is rendered
    const linkedInIcon = getByTestId("linkedin-icon");
    expect(linkedInIcon).toBeInTheDocument();
  });
  it("contains the expected contact information", () => {
    const { getByText } = render(<Footer />);
    // Ensure the email and phone number are present
    const email = getByText("tinywellness@gmail.com");
    const phoneNumber = getByText("+25470756960");
    expect(email).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
  });
});







