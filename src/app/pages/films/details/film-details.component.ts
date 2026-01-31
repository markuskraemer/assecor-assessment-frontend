import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
  ViewEncapsulation,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { DetailsButtonsRowComponent } from '../../shared/components/details-buttons-row/details-buttons-row.component';
import { SlideshowComponent } from '../../../components/slideshow/slideshow.component';
import { OverlayService } from '../../../core/services/overlay.service';
import { SwapiStore } from '../../../core/store/swapi.store';
import { DatePipe } from '@angular/common';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { getFilmImageSrc } from '../../shared/utils/imageUtils';
import { isString } from '../../../core/utils/utls';
import { NavService } from '../../../core/services/nav.service';

@Component({
  selector: 'film-details',
  imports: [DetailsButtonsRowComponent, SlideshowComponent, DatePipe, SpinnerComponent],
  templateUrl: './film-details.component.html',
  styleUrl: '../../shared/styles/page-details.shared.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  public readonly overlayService = inject(OverlayService);
  public readonly store = inject(SwapiStore);
  public readonly navService = inject(NavService);

  public readonly getFilmImageSrc = getFilmImageSrc;

  public readonly id = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
      filter((value) => isString(value)),
      map((v) => parseInt(v)),
    ),
  ) as Signal<number>;

  public readonly details = computed(() => this.store.getFilmById(this.id()));
}
