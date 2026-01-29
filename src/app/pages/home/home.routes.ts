import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./main/home-main.component').then((m) => m.HomeMainComponent),
  },
];
