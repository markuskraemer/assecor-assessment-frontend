import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SwapiStore } from '../../../data/starwars.store';
import { extractId } from '../../../utils/utils';

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

  public ngOnInit(): void {
    this.store.loadFilmList();
  }

  public showDetails(filmUrl: string) {
    const filmIdx = extractId(filmUrl);
    if (filmIdx >= 0) {
      this.router.navigate(['details', String(filmIdx)], { relativeTo: this.route });
    }
  }

  public getImageSrc(filmUrl: string) {
    const filmIdx = extractId(filmUrl) || 1;
    return `images/films/${((filmIdx - 1) % 6) + 1}.png`;
  }
}
