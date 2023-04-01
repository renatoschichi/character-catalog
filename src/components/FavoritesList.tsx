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

const FavoritesTitle = styled.div`
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 20px;
`;

function FavoritesList(props: FavoritesListProps) {
  const { favorites, onFavoriteToggle } = props;

  return (
    <><FavoritesTitle>Lista de personagens favoritos</FavoritesTitle><FavoritesListContainer>
      {favorites.map(character => (
        <Character
          key={character.id}
          character={character}
          onFavoriteToggle={() => onFavoriteToggle(character)}
          isFavorite />
      ))}
    </FavoritesListContainer></>
  );
}

export default FavoritesList;