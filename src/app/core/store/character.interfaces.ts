import { ApiResponse, Item } from './swapi.interfaces';

export interface CharacterListApiResponse extends ApiResponse {
  results: CharacterDto[];
}

export interface CharacterDto extends Item {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;

  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
}

export interface Character extends Item {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string;

  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
}
