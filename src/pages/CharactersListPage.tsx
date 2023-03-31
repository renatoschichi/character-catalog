import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import CharactersList from '../components/CharactersList';
import { searchCharacters } from '../services/characters';
import { CharacterResponse } from '../types/CharacterResponse';

interface CharactersListPageProps {
  favorites: CharacterResponse[];
  onFavoriteToggle: (character: CharacterResponse) => void;
}

const CharactersListContainer = styled.div`
  padding: 20px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? '#24292e' : '#fff')};
  color: ${(props) => (props.isActive ? '#fff' : '#24292e')};
  border: none;
  padding: 10px;
  margin: 5px;
  cursor: pointer;
  border-radius: 5px;
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
      <Pagination>
        {characters?.info?.prev && (
          <PageButton onClick={handlePrevPage} isActive={false}>
            Anterior
          </PageButton>
        )}
        {characters?.info?.next && (
          <PageButton onClick={handleNextPage} isActive={false}>
            Próxima
          </PageButton>
        )}
      </Pagination>
    </CharactersListContainer>
  );
}

export default CharactersListPage;