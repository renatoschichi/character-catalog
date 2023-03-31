import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Character from './../components/Character';
import { getCharacterById } from '../services/characters';

const CharacterDetailsContainer = styled.div`
  padding: 20px;
`;

function CharacterDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [favorite, setFavorite] = useState(false);
  const { isLoading, error, data: character } = useQuery(['character', id], () => getCharacterById(Number(id)));

  useEffect(() => {
    document.title = `Detalhes do Personagem | ${character?.name ?? 'Catálogo do Rick e Morty'}`;
  }, [character]);

  function handleFavorite() {
    setFavorite(!favorite);
  }

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Ocorreu um erro ao buscar o personagem.</p>;

  return (
    <CharacterDetailsContainer>
      <h1>Detalhes do Personagem</h1>
      <Character character={character} isFavorite={favorite} onFavoriteToggle={handleFavorite} />
    </CharacterDetailsContainer>
  );
}

export default CharacterDetailsPage;