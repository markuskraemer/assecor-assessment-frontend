import { ApiResponse, Item } from './swapi.interfaces';

export interface FilmListApiResponse extends ApiResponse {
  results: FilmDto[];
}

export interface FilmDto extends Item {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;

  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
}

export interface Film extends Item {
  title: string;
  episodeId: number;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;

  species: string[];
  starships: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
}
