import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { tapResponse } from '@ngrx/operators';
import { take } from 'rxjs';
import { SwapiState } from './swapi.initerfaces';
import { ApiService } from '../services/api.service';
import { FilmListApiResponse } from './film.interfaces';
import { FilmDetailsDto } from './filmDetails.interfaces';
import { parseFilmDetails, parseFilmListResponse } from './parsers';

const initialStarwarsState: SwapiState = {
  filmDetails: {},
  filmList: [],
  planets: {},
  loadingUrls: [],
};

export const SwapiStore = signalStore(
  { providedIn: 'root' },
  withState<SwapiState>(initialStarwarsState),
  withMethods((store) => {
    const apiService = inject(ApiService);

    return {
      loadFilmDetails: (id: string) => {
        const url = `/films/${id}`;
        if (store.filmDetails()[id] || store.loadingUrls().includes(url)) {
          return;
        }

        patchState(store, { loadingUrls: [...store.loadingUrls(), url] });
        apiService
          .get<FilmDetailsDto>(url)
          .pipe(
            take(1),
            tapResponse({
              next: (film) => {
                patchState(store, {
                  filmDetails: { ...store.filmDetails(), [id]: parseFilmDetails(film) },
                  loadingUrls: [...store.loadingUrls().filter((elem) => elem !== url)],
                });
              },
              error: (err) => {
                //patchState(store, {});
                // toastr.error(err);
              },
            }),
          )
          .subscribe();
      },
      loadFilmList: () => {
        if (store.filmList().length > 0) {
          return;
        }

        apiService
          .get<FilmListApiResponse>('/films/')
          .pipe(
            take(1),
            tapResponse({
              next: (filmListResponse) => {
                patchState(store, { filmList: parseFilmListResponse(filmListResponse) });
              },
              error: (err) => {
                //patchState(store, {});
                // toastr.error(err);
              },
            }),
          )
          .subscribe();
      },
    };
  }),
);
