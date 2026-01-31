# Starwars

```bash
Der Beitrag zur Assesor Assessment Frontend Challenge von Markus Krämer

In der App werden die Resourcen Films, People (Characters) und Planets der Swapi Api angezeigt.
Die Anzeige der einzelnen Panels erfolgt über Routing.
Die App ist noch ausbaufähig. Mögliche Verbesserungen sind:

  • Besseres Styling, insbesondere der Forms.
  • Besseres Responsivität.
  • Dummy Bilder ersetzen.
  • Animationen verbessern.
  • Suche benutztbar machen.
  • [List Seiten] Man sieht nur jeweils die erste Seite der Ressourcen (z.B. people). Es sollte eine Möglichkeit hinzugefügt werden, die anderen Seiten anzuzeigen.
  • [Details Seiten] Die meisten Verweise sind Dummys. Sie sollten aus den Backend Daten gefüttert werden.
  • [Details Seiten] Die Slideshow sollte bedienbar gemacht werden.
  • [Details Seiten] Aufruf von Route zu nicht existentem Detail sollte abgefangen werden.
  • Eventuelle Fehler beim Laden der Daten werden zwar an den NotificationService übermittelt; eine Anzeige der Fehler (z.B. per Toast) fehlt aber.
  • Generell Fehler abfangen und handlen.
  • Tests hinzufügen.
  • Bedienbarkeit verbessern (keyboard)


```

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.
