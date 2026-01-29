import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then((m) => m.homeRoutes),
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/films/films.routes').then((m) => m.filmsRoutes),
  },
  /*{ path: 'filmDetail', component: FilmDetails },
  { path: 'character', component: PersonOverview},
  { path: 'person', component: PersonDetails }
*/

  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
