import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { extractId, getFilmImageSrc } from '../../shared/utils/utils';
import { SwapiStore } from '../../../core/store/swapi.store';

@Component({
  selector: 'film-list',
  imports: [CardComponent],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmListComponent implements OnInit {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  public readonly store = inject(SwapiStore);

  public readonly filmList = this.store.filmList;

  constructor() {
    effect(() => console.log('loading: ', this.store.loadingUrls()));
  }

  public ngOnInit(): void {
    this.store.loadFilmList();
  }

  public showDetails(url: string) {
    const filmIdx = extractId(url);
    if (filmIdx >= 0) {
      this.router.navigate(['details', String(filmIdx)], { relativeTo: this.route });
    }
  }

  public getImageSrc(url: string) {
    return getFilmImageSrc(extractId(url));
  }
}
