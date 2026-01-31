import { Film, FilmListApiResponse } from './film.interfaces';
import { FilmDetails, FilmDetailsDto } from './filmDetails.interfaces';

export function parseFilmListResponse(response: FilmListApiResponse): Film[] {
  return response.results.map(
    (dto): Film => ({
      title: dto.title,
      episodeId: dto.episode_id,
      openingCrawl: dto.opening_crawl,
      director: dto.director,
      producer: dto.producer,
      releaseDate: dto.release_date,
      characterUrls: dto.characters || [],
      planetUrls: dto.planets || [],
      starshipUrls: dto.starships || [],
      vehicleUrls: dto.vehicles || [],
      speciesUrls: dto.species || [],
      url: dto.url,
      createdAt: dto.created,
      editedAt: dto.edited,
    }),
  );
}

export function parseFilmDetails(dto: FilmDetailsDto): FilmDetails {
  return {
    title: dto.title,
    episode: dto.episode_id,
    openingCrawl: dto.opening_crawl,
    director: dto.director,
    producer: dto.producer,
    releaseDate: dto.release_date,
    characterUrls: dto.characters || [],
    planetUrls: dto.planets || [],
    starshipUrls: dto.starships || [],
    vehicleUrls: dto.vehicles || [],
    speciesUrls: dto.species || [],
    url: dto.url,
    createdAt: dto.created,
    editedAt: dto.edited,
  };
}
