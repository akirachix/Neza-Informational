import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navbar from './';

describe('Navbar component', () => {
  it('renders without crashing', () => {
    render(<Navbar />);
  });

  it('displays the brand logo', () => {
    const { getByAltText } = render(<Navbar />);
    const logo = getByAltText('img');
    expect(logo).toBeInTheDocument();
  });

  it('toggles the menu when the toggler is clicked', () => {
    const { getByTestId, getByText } = render(<Navbar />);
    const toggler = getByTestId('nav-toggler');
    const menu = getByTestId('nav-menu');

    expect(menu).not.toHaveClass('nav__active');

    fireEvent.click(toggler);

    expect(menu).toHaveClass('nav__active');

    fireEvent.click(toggler);

    expect(menu).not.toHaveClass('nav__active');
  });

  it('toggles the icon when the toggler is clicked', () => {
    const { getByTestId } = render(<Navbar />);
    const toggler = getByTestId('nav-toggler');

    expect(toggler).not.toHaveClass('toggle');

    fireEvent.click(toggler);

    expect(toggler).toHaveClass('toggle');

    fireEvent.click(toggler);

    expect(toggler).not.toHaveClass('toggle');
  });



});
