import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';

import { SwapiStore } from '../../../core/store/swapi.store';
import { DatePipe } from '@angular/common';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { extractId } from '../../../core/utils/utls';
import { getFilmImageSrc } from '../../shared/utils/imageUtils';

@Component({
  selector: 'film-list',
  imports: [CardComponent, DatePipe, SpinnerComponent],
  templateUrl: './film-list.component.html',
  styleUrl: '../../shared/styles/page-list.shared.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmListComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  public readonly store = inject(SwapiStore);

  public readonly list = this.store.filmList;

  public showDetails(url: string) {
    const idx = extractId(url);
    if (idx >= 0) {
      this.router.navigate(['details', String(idx)], { relativeTo: this.route });
    }
  }

  public getImageSrc(url: string) {
    return getFilmImageSrc(extractId(url));
  }
}
