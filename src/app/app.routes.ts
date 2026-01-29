import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.routes').then((m) => m.homeRoutes),
  },
  /*
  { path: 'film', component: FilmOverview },
  { path: 'filmDetail', component: FilmDetails },
  { path: 'character', component: PersonOverview},
  { path: 'person', component: PersonDetails }
*/
];
