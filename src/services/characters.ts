import axios from 'axios';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

interface CharacterResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export async function searchCharacters(): Promise<Character[]> {
  const response = await axios.get<CharactersResponse>('https://rickandmortyapi.com/api/character');
  return response.data.results;
}

export async function getCharacterById(id: number): Promise<CharacterResponse> {
  const response = await axios.get<CharacterResponse>(`https://rickandmortyapi.com/api/character/${id}`);
  return response.data;
}