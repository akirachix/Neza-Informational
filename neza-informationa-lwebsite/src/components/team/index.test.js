import React from "react";
import { render } from "@testing-library/react";
import The_Team from ".";

test("Tests if the the team text and images render ", () => {
  const { getByText,getAllByAltText, getAllByText } = render(<The_Team />);

  const teamTitle = getByText("Team");
  expect(teamTitle).toBeInTheDocument();

  const teamMembers = getAllByAltText(/.*\b/);
  const teamMemberNames = getAllByText(/.*\b/);

});
