import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './index.js';
describe('Navbar Component', () => {
  it('should render without errors', () => {
    render(<Navbar />);
    const logo = screen.getByAltText('Logo');
    const homeLink = screen.getByText('Home');
    const aboutLink = screen.getByText('About');
    const contactLink = screen.getByText('Contact');
    const hamburgerMenu = screen.getByTestId('hamburger-menu');
    expect(logo).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
    expect(hamburgerMenu).toBeInTheDocument();
  });
  it('should toggle the navigation menu when the hamburger menu is clicked', () => {
    render(<Navbar />);
    const hamburgerMenu = screen.getByTestId('hamburger-menu');
    const navList = screen.getByTestId('nav-list');
    fireEvent.click(hamburgerMenu);
    expect(navList).toHaveClass('open');
    fireEvent.click(hamburgerMenu);
    expect(navList).not.toHaveClass('open');
  });
});