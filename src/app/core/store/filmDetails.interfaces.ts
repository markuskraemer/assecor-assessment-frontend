export interface FilmDetailsDto {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  url: string;
  created: string;
  edited: string;
}

export interface FilmDetails {
  title: string;
  episode: number;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
  characterUrls: string[];
  planetUrls: string[];
  speciesUrls: string[];
  vehicleUrls: string[];
  starshipUrls: string[];
  url: string;
  createdAt: string;
  editedAt: string;
}
