import React from 'react';
import { render } from '@testing-library/react';
import TheTeam from ".";

describe('TheTeam component', () => {
  it('renders the team title', () => {
    const { getByText } = render(<TheTeam />);
    const teamTitle = getByText('Team');
    expect(teamTitle).toBeInTheDocument();
  });

  it('renders team members with their names and LinkedIn links', () => {
    const { getByText, getAllByRole, getAllByAltText } = render(<TheTeam />);
    const teamMembers = getAllByRole('img');
    const linkedinLinks = getAllByRole('link');

    const Team = [
      { name: 'Esther Mwangi', linkedin: 'https://www.linkedin.com/in/esther-mwangi-/'},
      { name: 'Joyeuse Kabanyana', linkedin: 'https://www.linkedin.com/in/joyeuse-kabanyana/'},
      { name: 'Loice Mwau', linkedin: 'https://www.linkedin.com/in/loice-mwau-94759426a/'},
      { name: 'Marion Njeri', linkedin: 'https://www.linkedin.com/in/marion-njeri/'},
      { name: 'Grace Kazungu', linkedin: 'https://www.linkedin.com/in/gracekazungu/'},
    ];

    Team.forEach((teamMember, index) => {
      expect(teamMembers[index]).toBeInTheDocument();
      expect(linkedinLinks[index]).toHaveAttribute('href', teamMember.linkedin);
      expect(teamMembers).toHaveLength(Team.length);
    });
  });

  it('renders team member names correctly', () => {
    const { getByText } = render(<TheTeam />);
    const Team = [
      'Esther Mwangi',
      'Joyeuse Kabanyana',
      'Loice Mwau',
      'Marion Njeri',
      'Grace Kazungu',
    ];

    Team.forEach((teamMemberName) => {
        const teamMemberNameElement = getByText(teamMemberName);
        expect(teamMemberNameElement).toBeInTheDocument();
      });
    });
});
