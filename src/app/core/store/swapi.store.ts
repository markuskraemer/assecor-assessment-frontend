import { inject, Signal } from '@angular/core';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { tapResponse } from '@ngrx/operators';
import { take } from 'rxjs';
import { SwapiState } from './swapiStore.initerfaces';
import { ApiService } from '../services/api.service';
import { FilmListApiResponse } from './film.interfaces';
import {
  parseCharacterListApiResponse,
  parseFilmListResponse,
  parsePlanetListApiResponse,
} from './parsers';
import { NotificationService } from '../services/notification.service';
import { CharacterListApiResponse } from './character.interfaces';
import { PlanetListApiResponse } from './planets.interface';
import { extractId } from '../utils/utls';
import { Item } from './swapi.interfaces';

const initialStarwarsState: SwapiState = {
  filmList: [],
  characterList: [],
  planetList: [],
  loadingUrls: [],
};

function findByUrl<T extends Item>(items: T[], id: number) {
  return items.find((item) => extractId(item.url) === id);
}

export const SwapiStore = signalStore(
  { providedIn: 'root' },
  withState<SwapiState>(initialStarwarsState),

  withMethods((state) => {
    const apiService = inject(ApiService);
    const notificationService = inject(NotificationService);

    return {
      getFilmById: (id: number) => findByUrl(state.filmList(), id),
      getCharacterById: (id: number) => findByUrl(state.characterList(), id),
      getPlanetById: (id: number) => findByUrl(state.planetList(), id),

      loadFilmList: () => {
        if (state.filmList().length > 0) {
          return;
        }

        apiService
          .get<FilmListApiResponse>('/films/')
          .pipe(
            take(1),
            tapResponse({
              next: (response) => {
                patchState(state, { filmList: parseFilmListResponse(response) });
              },
              error: (err) => {
                notificationService.show('Fehler beim Laden der Filme');
              },
            }),
          )
          .subscribe();
      },

      loadCharacterList: () => {
        if (state.characterList().length > 0) {
          return;
        }

        apiService
          .get<CharacterListApiResponse>('/people/')
          .pipe(
            take(1),
            tapResponse({
              next: (response) => {
                patchState(state, { characterList: parseCharacterListApiResponse(response) });
              },
              error: (err) => {
                notificationService.show('Fehler beim Laden der Charakter');
              },
            }),
          )
          .subscribe();
      },

      loadPlanetList: () => {
        if (state.planetList().length > 0) {
          return;
        }

        apiService
          .get<PlanetListApiResponse>('/planets/')
          .pipe(
            take(1),
            tapResponse({
              next: (response) => {
                patchState(state, { planetList: parsePlanetListApiResponse(response) });
              },
              error: (err) => {
                notificationService.show('Fehler beim Laden der Planeten');
              },
            }),
          )
          .subscribe();
      },
    };
  }),
);
