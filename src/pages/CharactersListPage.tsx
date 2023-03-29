import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import CharactersList from './../components/CharactersList';
import { searchCharacters } from '../services/characters';

const CharactersListContainer = styled.div`
  padding: 20px;
`;

function CharactersListPage() {
  const { isLoading, error, data: characters } = useQuery('characters', searchCharacters);

  useEffect(() => {
    document.title = 'Character List | Rick and Morty Catalog';
  }, []);

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Ocorreu um erro ao buscar os personagens.</p>;

  return (
    <CharactersListContainer>
      <h1>Lista de Personagens</h1>
      <CharactersList characters={characters} />
    </CharactersListContainer>
  );
}

export default CharactersListPage;
