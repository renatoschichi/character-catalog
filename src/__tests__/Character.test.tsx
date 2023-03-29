import React from 'react';
import { render, screen } from '@testing-library/react';
import Character from '../components/Character';

const characterProps = {
  character: {
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    species: 'Human',
    localization: 'Earth',
  }
};

describe('Character component', () => {
  it('renders character image, name, species, and localization', () => {
    render(<Character character={characterProps.character} />);

    const characterImage = screen.getByAltText(characterProps.character.name);
    const characterName = screen.getByText(characterProps.character.name);
    const characterSpecies = screen.getByText(`Species: ${characterProps.character.species}`);
    const characterLocalization = screen.getByText(`Localization: ${characterProps.character.localization}`);

    expect(characterImage).toBeInTheDocument();
    expect(characterName).toBeInTheDocument();
    expect(characterSpecies).toBeInTheDocument();
    expect(characterLocalization).toBeInTheDocument();
  });
});
