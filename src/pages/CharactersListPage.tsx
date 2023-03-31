import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import CharactersList from './../components/CharactersList';
import { searchCharacters } from '../services/characters';
import { CharacterResponse } from '../types/CharacterResponse';

interface CharactersListPageProps {
  favorites: CharacterResponse[];
  onFavoriteToggle: (character: CharacterResponse) => void;
}

const CharactersListContainer = styled.div`
  padding: 20px;
`;

function CharactersListPage(props: CharactersListPageProps) {
  const { favorites, onFavoriteToggle } = props;
  const { isLoading, error, data: characters } = useQuery('characters', searchCharacters);

  useEffect(() => {
    document.title = 'Lista de Personagens | Rick and Morty Catalog';
  }, []);

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Ocorreu um erro ao buscar os personagens.</p>;

  return (
    <CharactersListContainer>
      <h1>Lista de personagens</h1>
      <CharactersList characters={characters} favorites={favorites} onFavoriteToggle={onFavoriteToggle} />
    </CharactersListContainer>
  );
}

export default CharactersListPage;