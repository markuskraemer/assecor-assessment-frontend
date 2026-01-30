import { Routes } from '@angular/router';

export const filmsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/film-list.component').then((m) => m.FilmListComponent),
  },
  {
    path: 'details/:filmId',
    loadComponent: () =>
      import('./details/film-details.component').then((m) => m.FilmDetailsComponent),
  },
];
