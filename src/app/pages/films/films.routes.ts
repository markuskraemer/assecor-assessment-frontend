import { Routes } from '@angular/router';

export const filmsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/films-main.component').then((m) => m.FilmsMainComponent),
  },
];
