export interface FilmListApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: FilmDto[];
}

export interface FilmDto {
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

  url: string;
  created: string;
  edited: string;
}

export interface Film {
  title: string;
  episodeId: number;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;

  speciesUrls: string[];
  starshipUrls: string[];
  vehicleUrls: string[];
  characterUrls: string[];
  planetUrls: string[];

  url: string;
  createdAt: string;
  editedAt: string;
}
