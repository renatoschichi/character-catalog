import React from 'react';
import styled from 'styled-components';

interface CharacterProps {
  character?: {
    id: number;
    image: string;
    name: string;
    species: string;
    localization?: string;
  };
}

const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CharacterImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 300px;
  margin-bottom: 10px;
`;

function Character(props: CharacterProps) {
  const { image, name, species, localization } = props.character ?? {};

  return (
    <CharacterContainer>
      <CharacterImage src={image} alt={name} />
      <h3>{name}</h3>
      <p>Espécies: {species}</p>
      <p>Localização: {localization}</p>
    </CharacterContainer>
  );
}

export default Character;
