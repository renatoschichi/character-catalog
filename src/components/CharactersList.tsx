import React, { useEffect } from 'react';
import styled from 'styled-components';
import { CharacterResponse } from '../types/CharacterResponse ';
import Character from './Character';

interface CharactersListProps {
  characters?: CharacterResponse[];
}

const CharactersListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

function CharactersList(props: CharactersListProps) {
  const { characters } = props;

  return (
    <CharactersListContainer>
      {characters?.map(character => (
        <Character
          key={character.id}
          character={character}
        />
      ))}
    </CharactersListContainer>
  );
}

export default CharactersList;
