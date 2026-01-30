import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { tapResponse } from '@ngrx/operators';
import { SwapiState } from './model/swapi.initerfaces';
import { inject } from '@angular/core';
import { ApiService } from './api.service';
import { parseFilmDetails, parseFilmListResponse } from './helpers';
import { FilmListApiResponse } from './model/film.interfaces';
import { FilmDetailsDto } from './model/filmDetails.interfaces';

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
