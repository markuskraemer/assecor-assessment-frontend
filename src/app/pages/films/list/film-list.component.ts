import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import * as filmsJson from './films.json';
import { CardComponent } from '../../../components/card/card.component';
import { Film } from '../../../data/model/film.interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'film-list',
  imports: [CardComponent],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmListComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  public films = signal(filmsJson.results.filter((item, index) => index <= 4));

  constructor() {}

  public showDetails(filmIdx: number) {
    this.router.navigate(['details', filmIdx], { relativeTo: this.route });
  }
}
