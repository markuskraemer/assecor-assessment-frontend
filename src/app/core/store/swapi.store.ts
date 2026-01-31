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

function findById<T extends Item>(items: T[], id: number) {
  return items.find((item) => extractId(item.url) === id);
}

function findByUrl<T extends Item>(items: T[], url: string) {
  return items.find((item) => item.url === url);
}

export const SwapiStore = signalStore(
  { providedIn: 'root' },
  withState<SwapiState>(initialStarwarsState),

  withMethods((state) => {
    const apiService = inject(ApiService);
    const notificationService = inject(NotificationService);

    return {
      getFilmById: (id: number) => findById(state.filmList(), id),
      getCharacterById: (id: number) => findById(state.characterList(), id),
      getPlanetById: (id: number) => findById(state.planetList(), id),
      getPlanetByUrl: (url: string) => findByUrl(state.planetList(), url),

      loadFilmList: () => {
        const url = '/films/';
        if (state.filmList().length > 0 || state.loadingUrls().includes(url)) {
          return;
        }
        patchState(state, { loadingUrls: [...state.loadingUrls(), url] });
        apiService
          .get<FilmListApiResponse>(url)
          .pipe(
            take(1),
            tapResponse({
              next: (response) => {
                patchState(state, {
                  filmList: parseFilmListResponse(response),
                  loadingUrls: [...state.loadingUrls().filter((item) => item !== url)],
                });
              },
              error: (err) => {
                patchState(state, {
                  loadingUrls: [...state.loadingUrls().filter((item) => item !== url)],
                });
                notificationService.show('Fehler beim Laden der Filme');
              },
            }),
          )
          .subscribe();
      },

      loadCharacterList: () => {
        const url = '/people/';

        if (state.characterList().length > 0 || state.loadingUrls().includes(url)) {
          return;
        }
        patchState(state, { loadingUrls: [...state.loadingUrls(), url] });

        apiService
          .get<CharacterListApiResponse>(url)
          .pipe(
            take(1),
            tapResponse({
              next: (response) => {
                patchState(state, {
                  characterList: parseCharacterListApiResponse(response),
                  loadingUrls: [...state.loadingUrls().filter((item) => item !== url)],
                });
              },
              error: (err) => {
                patchState(state, {
                  loadingUrls: [...state.loadingUrls().filter((item) => item !== url)],
                });

                notificationService.show('Fehler beim Laden der Charakter');
              },
            }),
          )
          .subscribe();
      },

      loadPlanetList: () => {
        const url = '/planets/';
        if (state.planetList().length > 0 || state.loadingUrls().includes(url)) {
          return;
        }
        patchState(state, { loadingUrls: [...state.loadingUrls(), url] });

        apiService
          .get<PlanetListApiResponse>(url)
          .pipe(
            take(1),
            tapResponse({
              next: (response) => {
                patchState(state, {
                  planetList: parsePlanetListApiResponse(response),
                  loadingUrls: [...state.loadingUrls().filter((item) => item !== url)],
                });
              },
              error: (err) => {
                patchState(state, {
                  loadingUrls: [...state.loadingUrls().filter((item) => item !== url)],
                });

                notificationService.show('Fehler beim Laden der Planeten');
              },
            }),
          )
          .subscribe();
      },
    };
  }),
);
