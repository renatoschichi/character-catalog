import React from 'react';
import styled from 'styled-components';
import { CharacterResponse } from '../types/CharacterResponse';
import Character from './Character';

interface CharactersListProps {
  characters?: CharacterResponse[];
  favorites: CharacterResponse[];
  onFavoriteToggle: (character: CharacterResponse) => void;
}

const CharactersListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

function CharactersList(props: CharactersListProps) {
  const { characters, favorites, onFavoriteToggle } = props;

  return (
    <CharactersListContainer>
      {characters?.map(character => (
        <Character
          key={character.id}
          character={character}
          isFavorite={favorites.includes(character)}
          onFavoriteToggle={() => onFavoriteToggle(character)}
        />
      ))}
    </CharactersListContainer>
  );
}

export default CharactersList;
