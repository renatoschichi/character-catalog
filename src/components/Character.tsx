import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CharacterResponse } from '../types/CharacterResponse';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

interface CharacterProps {
  character?: CharacterResponse;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
}

const CharacterContainer = styled.div<{ isSelected: boolean }>`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isSelected ? '#ffc39e' : '#e1f5fe')};
  border-radius: 5px;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;
`;

const CharacterImage = styled.img<{ isSelected: boolean }>`
  width: 100%;
  height: auto;
  max-width: 300px;
  margin-bottom: 10px;
  border-radius: ${props => (props.isSelected ? '50%' : '5px')};
  transition: border-radius 0.3s ease-in-out;
`;

const FavoriteButton = styled.button<{ isFavorite: boolean }>`
  background-color: transparent;
  border: none;
  color: ${props => (props.isFavorite ? 'red' : 'inherit')};
  padding: 10px;
  cursor: pointer;
`;

function Character(props: CharacterProps) {
  const { character, isFavorite, onFavoriteToggle } = props;

  useEffect(() => {
    if (character) {
      document.title = `${character.name} | Catálogo do Rick and Morty`;
    }
  }, [character]);

  return (
    <CharacterContainer isSelected={isFavorite} onClick={onFavoriteToggle}>
      {character ? (
        <>
          <CharacterImage
            isSelected={isFavorite}
            src={character?.image}
            alt={character?.name}
          />
          <h3>{character?.name}</h3>
          <p>Espécies: {character?.species}</p>
          <p>Localização: {character?.location?.name}</p>
          <FavoriteButton isFavorite={isFavorite}>
            {isFavorite ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
          </FavoriteButton>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </CharacterContainer>
  );
}

export default Character;