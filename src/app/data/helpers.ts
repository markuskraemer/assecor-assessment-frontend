import { Film, FilmListApiResponse } from './model/film.interfaces';
import { FilmDetails, FilmDetailsDto } from './model/filmDetails.interfaces';

export function parseFilmListResponse(response: FilmListApiResponse): Film[] {
  return response.results.map(
    (film): Film => ({
      title: film.title,
      episodeId: film.episode_id,
      openingCrawl: film.opening_crawl,
      director: film.director,
      producer: film.producer,
      releaseDate: film.release_date,
      characterUrls: film.characters,
      planetUrls: film.planets,
      starshipUrls: film.starships,
      vehicleUrls: film.vehicles,
      speciesUrls: film.species,
      url: film.url,
      createdAt: film.created,
      editedAt: film.edited,
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
    characterUrls: dto.characters,
    planetUrls: dto.planets,
    starshipUrls: dto.starships,
    vehicleUrls: dto.vehicles,
    speciesUrls: dto.species,
    url: dto.url,
    createdAt: dto.created,
    editedAt: dto.edited,
  };
}

function splitNumber(urls: string[], phrase: string) {
  return urls
    .map((url) => {
      const match = url.match(/\/${phrase}\/(\d+)\/$/);
      return match ? parseInt(match[1], 10) : NaN;
    })
    .filter((id) => !isNaN(id));
}

function split(urls: string[], phrase: string) {
  return urls.map((url) => {
    const match = url.match(/\/${phrase}\/(\d+)\/$/);
    return match ? match[1] : '';
  });
}
