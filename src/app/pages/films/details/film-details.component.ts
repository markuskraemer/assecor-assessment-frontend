import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import * as filmsJson from './films.json';
import { DetailsButtonsRowComponent } from '../../shared/components/details-buttons-row/details-buttons-row.component';
import { SlideshowComponent } from '../../../components/slideshow/slideshow.component';
import { OverlayService } from '../../../services/overlay.service';

@Component({
  selector: 'film-details',
  imports: [DetailsButtonsRowComponent, SlideshowComponent],
  templateUrl: './film-details.component.html',
  styleUrl: './film-details.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  public readonly overlayService = inject(OverlayService);

  public filmId = toSignal(this.route.paramMap.pipe(map((params) => params.get('filmId'))));

  public myFilm = signal(filmsJson.results[0]); // draft!
}
