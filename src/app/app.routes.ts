import { Routes } from '@angular/router';
import { FilmAddComponent } from './pages/films/film-add/film-add.component';
import { PlanetAddComponent } from './pages/planets/planet-add/planet-add.component';
import { CharacterAddComponent } from './pages/characters/character-add/character-add.component';
import { HomeMainComponent } from './pages/home/main/home-main.component';

export const routes: Routes = [
  /////////////////////////////
  // main routes
  {
    path: 'home',
    component: HomeMainComponent,
  },
  {
    path: 'films',
    loadChildren: () => import('./pages/films/films.routes').then((m) => m.filmsRoutes),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./pages/characters/characters.routes').then((m) => m.charactersRoutes),
  },
  {
    path: 'planets',
    loadChildren: () => import('./pages/planets/planets.routes').then((m) => m.planetsRoutes),
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
  {
    path: 'add-planet',
    component: PlanetAddComponent,
    outlet: 'overlay',
  },
  {
    path: 'add-character',
    component: CharacterAddComponent,
    outlet: 'overlay',
  },
];
