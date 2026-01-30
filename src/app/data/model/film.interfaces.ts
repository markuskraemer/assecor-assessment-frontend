type IsoDate = string;
type Url = string;

export interface FilmDto {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: IsoDate;

  species: Url[];
  starships: Url[];
  vehicles: Url[];
  characters: Url[];
  planets: Url[];

  url: Url;
  created: IsoDate;
  edited: IsoDate;
}

export interface Film {
  title: string;
  episodeId: number;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: Date;

  speciesUrls: string[];
  starshipUrls: string[];
  vehicleUrls: string[];
  characterUrls: string[];
  planetUrls: string[];

  url: string;
  createdAt: Date;
  updatedAt: Date;
}
