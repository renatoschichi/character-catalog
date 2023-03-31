import React from 'react';
import CharactersList from '../components/CharactersList';
import { CharacterResponse } from '../types/CharacterResponse';

interface FavoritesListPageProps {
  favorites: CharacterResponse[];
  onFavoriteToggle: (character: CharacterResponse) => void;
}

function FavoritesListPage({ favorites, onFavoriteToggle }: FavoritesListPageProps) {
  return (
    <>
      <h1>Personagens favoritos</h1>
      <CharactersList characters={favorites} onFavoriteToggle={onFavoriteToggle} favorites={favorites} />
    </>
  );
}

export default FavoritesListPage;