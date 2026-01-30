import { Routes } from '@angular/router';
import { FilmAddComponent } from './pages/films/film-add/film-add.component';

export const routes: Routes = [
  /////////////////////////////
  // main routes
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.routes').then((m) => m.homeRoutes),
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/films/films.routes').then((m) => m.filmsRoutes),
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  /////////////////////////////
  // overlay routes
  {
    path: 'add-film',
    component: FilmAddComponent,
    outlet: 'overlay',
  },
];
