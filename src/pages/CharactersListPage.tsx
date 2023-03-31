import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import CharactersList from '../components/CharactersList';
import { searchCharacters } from '../services/characters';
import { CharacterResponse } from '../types/CharacterResponse';
import Pagination from '../components/Pagination';

interface CharactersListPageProps {
  favorites: CharacterResponse[];
  onFavoriteToggle: (character: CharacterResponse) => void;
}

const CharactersListContainer = styled.div`
  padding: 20px;
`;

function CharactersListPage(props: CharactersListPageProps) {
  const { favorites, onFavoriteToggle } = props;
  const [page, setPage] = useState<number>(1);
  const { isLoading, error, data: characters, refetch } = useQuery(['characters', page], () => searchCharacters(page));

  useEffect(() => {
    document.title = 'Lista de Personagens | Rick and Morty Catalog';
  }, []);

  function handlePageChange(newPage: number) {
    setPage(newPage);
  }

  function handlePrevPage() {
    setPage((prevPage) => prevPage - 1);
  }

  function handleNextPage() {
    setPage((prevPage) => prevPage + 1);
  }

  useEffect(() => {
    refetch();
  }, [page, refetch]);

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Ocorreu um erro ao buscar os personagens.</p>;

  return (
    <CharactersListContainer>
      <h1>Lista de personagens</h1>
      <CharactersList characters={characters?.results} favorites={favorites} onFavoriteToggle={onFavoriteToggle} />
      <Pagination currentPage={page} totalPages={characters?.info?.pages ?? 0} onPageChange={handlePageChange} />
    </CharactersListContainer>
  );
}

export default CharactersListPage;