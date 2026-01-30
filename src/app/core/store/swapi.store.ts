import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { tapResponse } from '@ngrx/operators';
import { SwapiState } from './swapi.initerfaces';
import { inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FilmListApiResponse } from './film.interfaces';
import { FilmDetailsDto } from './filmDetails.interfaces';
import { parseFilmDetails, parseFilmListResponse } from './helpers';

const initialStarwarsState: SwapiState = {
  filmDetails: {},
  filmList: [],
  planets: {},
  loadingPages: [],
};

export const SwapiStore = signalStore(
  { providedIn: 'root' },
  withState<SwapiState>(initialStarwarsState),

  withMethods((store) => {
    const apiService = inject(ApiService);

    return {
      loadFilmDetails: (id: string) => {
        apiService
          .get<FilmDetailsDto>(`/films/${id}`)
          .pipe(
            tapResponse({
              next: (film) => {
                patchState(store, {
                  filmDetails: { ...store.filmDetails(), [id]: parseFilmDetails(film) },
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
        apiService
          .get<FilmListApiResponse>('/films/')
          .pipe(
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
