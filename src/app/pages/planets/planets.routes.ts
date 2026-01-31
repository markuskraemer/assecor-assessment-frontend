import { Routes } from '@angular/router';
import { PlanetListComponent } from './list/planet-list.component';
import { PlanetDetailsComponent } from './details/planet-details.component';

export const planetsRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/planet-list.component').then((m) => m.PlanetListComponent),
  },

  {
    path: 'details/:id',
    loadComponent: () =>
      import('./details/planet-details.component').then((m) => m.PlanetDetailsComponent),
  },
];
