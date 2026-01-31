import { Character, CharacterListApiResponse } from './character.interfaces';
import { Film, FilmListApiResponse } from './film.interfaces';
import { Planet, PlanetListApiResponse } from './planets.interface';

export function parseFilmListResponse(response: FilmListApiResponse): Film[] {
  return response.results.map(
    (dto): Film => ({
      title: dto.title,
      episodeId: dto.episode_id,
      openingCrawl: dto.opening_crawl,
      director: dto.director,
      producer: dto.producer,
      releaseDate: dto.release_date,
      characters: dto.characters || [],
      starships: dto.starships || [],
      vehicles: dto.vehicles || [],
      species: dto.species || [],
      planets: dto.species || [],
      url: dto.url,
      created: dto.created,
      edited: dto.edited,
    }),
  );
}

export function parseCharacterListApiResponse(response: CharacterListApiResponse): Character[] {
  return response.results.map(
    (dto): Character => ({
      name: dto.name,
      height: dto.height,
      mass: dto.mass,
      hairColor: dto.hair_color,
      skinColor: dto.skin_color,
      eyeColor: dto.eye_color,
      birthYear: dto.birth_year,
      gender: dto.gender,
      homeworld: dto.homeworld,
      starships: dto.starships || [],
      vehicles: dto.vehicles || [],
      species: dto.species || [],
      films: dto.films || [],
      url: dto.url,
      created: dto.created,
      edited: dto.edited,
    }),
  );
}

export function parsePlanetListApiResponse(response: PlanetListApiResponse): Planet[] {
  return response.results.map(
    (dto): Planet => ({
      name: dto.name,
      rotationPeriod: dto.rotation_period,
      orbitalPeriod: dto.orbital_period,
      diameter: dto.diameter,
      climate: dto.climate,
      gravity: dto.gravity,
      terrain: dto.terrain,
      surfaceWater: dto.surface_water,
      population: dto.population,
      films: dto.films || [],
      residends: dto.residends || [],
      url: dto.url,
      created: dto.created,
      edited: dto.edited,
    }),
  );
}
