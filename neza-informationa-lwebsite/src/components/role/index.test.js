import React from 'react';
import { render } from '@testing-library/react';
import Role from '.';
test('renders the role content correctly', () => {
  const { getByText } = render(<Role />);
  const roleTitle = getByText('Your Role In The Change');
  expect(roleTitle).toBeInTheDocument();
  const roleDescription = getByText(/At Regrow, we power the business case for sustainable agriculture./i);
  expect(roleDescription).toBeInTheDocument();
});
test('renders planning section with image and content', () => {
  const { getByText, getByAltText } = render(<Role />);
  const planningImage = getByAltText('planning');
  expect(planningImage).toBeInTheDocument();
  const planningTitle = getByText('PLANNING');
  expect(planningTitle).toBeInTheDocument();
  const planningDescription = getByText(/organizations use our predictive model to identify high-risk areas and allocate resources effectively for lead exposure risk reduction./i);
  expect(planningDescription).toBeInTheDocument();
});
test('renders testing section with image and content', () => {
  const { getByText, getByAltText } = render(<Role />);
  const testingImage = getByAltText('testing');
  expect(testingImage).toBeInTheDocument();
  const testingTitle = getByText('TESTING');
  expect(testingTitle).toBeInTheDocument();
  const testingDescription = getByText(/organizations conduct comprehensive assessments, including blood tests, soil and water lead content analysis, and air quality monitoring, to validate our model's predictions./i);
  expect(testingDescription).toBeInTheDocument();
});
test('renders intervention section with image and content', () => {
  const { getByText, getByAltText } = render(<Role />);
  const interventionImage = getByAltText('intervention');
  expect(interventionImage).toBeInTheDocument();
  const interventionTitle = getByText('INTERVENTION');
  expect(interventionTitle).toBeInTheDocument();
  const interventionDescription = getByText(/organizations implement targeted interventions, provide community support, and continue data-driven monitoring to reduce lead exposure levels and improve public health./i);
  expect(interventionDescription).toBeInTheDocument();
});







