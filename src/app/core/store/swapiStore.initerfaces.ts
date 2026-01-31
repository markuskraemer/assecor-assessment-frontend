import { Character } from './character.interfaces';
import { Film } from './film.interfaces';
import { Planet } from './planets.interface';

export interface SwapiState {
  filmList: Film[];
  characterList: Character[];
  planetList: Planet[];
  loadingUrls: string[];
}
