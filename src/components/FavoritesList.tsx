import React from 'react';
import styled from 'styled-components';
import { CharacterResponse } from '../types/CharacterResponse';
import Character from './Character';

interface FavoritesListProps {
  favorites: CharacterResponse[];
  onFavoriteToggle: (character: CharacterResponse) => void;
}

const FavoritesListContainer = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

function FavoritesList(props: FavoritesListProps) {
  const { favorites, onFavoriteToggle } = props;

  return (
    <FavoritesListContainer>
      {favorites.map(character => (
        <Character
          key={character.id}
          character={character}
          onFavoriteToggle={() => onFavoriteToggle(character)}
          isFavorite
        />
      ))}
    </FavoritesListContainer>
  );
}

export default FavoritesList;