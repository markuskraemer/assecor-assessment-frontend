import { Film } from './film.interfaces';
import { FilmDetails } from './filmDetails.interfaces';

export interface SwapiState {
  //people: Person[];
  filmDetails: Record<string, FilmDetails>;
  filmList: Film[];
  planets: Record<string, any>;
  loadingUrls: string[];
}
