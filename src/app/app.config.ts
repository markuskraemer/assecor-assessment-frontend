import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  importProvidersFrom,
  LOCALE_ID,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';
import { registerLocaleData } from '@angular/common';

import localeDe from '@angular/common/locales/de';
import { routes } from './app.routes';

registerLocaleData(localeDe);
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    importProvidersFrom(ReactiveFormsModule),
    { provide: LOCALE_ID, useValue: 'de' },
  ],
};
