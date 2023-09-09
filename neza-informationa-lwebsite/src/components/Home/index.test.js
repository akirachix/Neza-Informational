import React from 'react';
import { render } from '@testing-library/react';
import Home from '.';
import Slideshow2 from '../../atoms_for_slideshow/slideshow-home';
test('renders the "What is lead exposure and why does it matter?" section', () => {
  const { getByText } = render(<Home />);
  const sectionTitle = getByText('What is lead exposure and why does it matter?');
  expect(sectionTitle).toBeInTheDocument();
  const sectionDescription = getByText(/Lead exposure refers to the ingestion, inhalation, or absorption of lead/i);
  expect(sectionDescription).toBeInTheDocument();
});
test('renders a list of points about why lead exposure matters', () => {
  const { getByText, getAllByRole } = render(<Home />);
  const pointsList = getAllByRole('listitem');
  expect(pointsList).toHaveLength(4);
  const healthImpactPoint = getByText(/Health Impact: Lead harms the brain, causes learning disabilities, behavioral issues, and can affect fetal development during pregnancy./i);
  expect(healthImpactPoint).toBeInTheDocument();
  const lifetimeConsequencesPoint = getByText(/Lifetime Consequences: Effects are often irreversible, especially in children./i);
  expect(lifetimeConsequencesPoint).toBeInTheDocument();
  const vulnerablePopulationsPoint = getByText(/Vulnerable Populations: Low-income communities are often disproportionately affected./i);
  expect(vulnerablePopulationsPoint).toBeInTheDocument();
  const globalIssuePoint = getByText(/Global Issue: It's a global concern requiring preventive measures like lead-safe housing and clean water./i);
  expect(globalIssuePoint).toBeInTheDocument();
});