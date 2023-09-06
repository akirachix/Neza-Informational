import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Slideshow2 from './';

const slides2 = [
  {
    imgSrc: 'images/slide-images/kids2.jpg',
    alt: "product Background",
    title: "Lead Exposure Threatens the health of Kenyan Children. We're Here To Change That",
  },
  {
    imgSrc: "images/slide-images/kids1.jpg",
    alt: "product Background2",
    title: "Children Under The Age Of 5 Years Absorb Lead 4-5 Times Faster Than Adults",
  },
  {
    imgSrc: "images/slide-images/kids3.jpg",
    alt: "product Background3",
    title: "1 in 3 Children Have Blood Lead Levels That Are Cause For Concern",
  },
  {
    imgSrc: "images/slide-images/women.jpg",
    alt: "product Background3",
    title: "Pregnant Women Who Have Been Exposed To Lead Transfer Lead To Their Unborn Children",
  },
];

describe('Slideshow2', () => {
  it('renders the first slide by default', () => {
    render(<Slideshow2 />);
    
    // Check if the first slide is visible
    expect(screen.getByText("Lead Exposure Threatens the health of Kenyan Children. We're Here To Change That")).toBeInTheDocument();
  });

  it('automatically advances to the next slide after a delay', async () => {
    render(<Slideshow2 />);
    
    // Wait for the second slide to appear
    await waitFor(() => screen.getByText("Children Under The Age Of 5 Years Absorb Lead 4-5 Times Faster Than Adults"));
    
    // Check if the second slide is visible
    expect(screen.getByText("Children Under The Age Of 5 Years Absorb Lead 4-5 Times Faster Than Adults")).toBeInTheDocument();
  });

  it('handles circular navigation', async () => {
    render(<Slideshow2 />);
    
    // Wait for the second slide to appear
    await waitFor(() => screen.getByText("Children Under The Age Of 5 Years Absorb Lead 4-5 Times Faster Than Adults"));
    
    // Wait for the first slide to reappear (circular navigation)
    await waitFor(() => screen.getByText("Lead Exposure Threatens the health of Kenyan Children. We're Here To Change That"));
    
    // Check if it has wrapped back to the first slide
    expect(screen.getByText("Lead Exposure Threatens the health of Kenyan Children. We're Here To Change That")).toBeInTheDocument();
  });
});