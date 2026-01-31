import { Routes } from '@angular/router';

export const charactersRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./list/character-list.component').then((m) => m.CharacterListComponent),
  },

  {
    path: 'details/:id',
    loadComponent: () =>
      import('./details/character-details.component').then((m) => m.CharacterDetailsComponent),
  },
];
