import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  OnInit,
  Signal,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { filter, map, take, tap } from 'rxjs';
import { DetailsButtonsRowComponent } from '../../shared/components/details-buttons-row/details-buttons-row.component';
import { SlideshowComponent } from '../../../components/slideshow/slideshow.component';
import { getFilmImageSrc, isString } from '../../shared/utils/utils';
import { OverlayService } from '../../../core/services/overlay.service';
import { SwapiStore } from '../../../core/store/swapi.store';

@Component({
  selector: 'film-details',
  imports: [DetailsButtonsRowComponent, SlideshowComponent],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  public readonly overlayService = inject(OverlayService);
  public readonly store = inject(SwapiStore);
  public readonly getFilmImageSrc = getFilmImageSrc;

  public readonly filmId = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('filmId')),
      filter((value) => isString(value)),
    ),
  ) as Signal<string>;

  public readonly filmDetails = computed(() => this.store.filmDetails()[this.filmId()]);

  public ngOnInit() {
    this.store.loadFilmDetails(this.filmId());
  }

  constructor() {
    effect(() => console.log('FILMID: ', this.filmId()));
    effect(() => console.log('myFilm: ', this.filmDetails()));

    effect(() => console.log('loading: ', this.store.loadingUrls()));
  }
}
