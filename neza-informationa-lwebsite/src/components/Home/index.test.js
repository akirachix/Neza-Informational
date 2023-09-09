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
  const healthImpactPoint = getByText(/Health Impact/i);
  expect(healthImpactPoint).toBeInTheDocument();;
  const vulnerablePopulationsPoint = getByText(/Vulnerable Populations/i);
  expect(vulnerablePopulationsPoint).toBeInTheDocument();
});