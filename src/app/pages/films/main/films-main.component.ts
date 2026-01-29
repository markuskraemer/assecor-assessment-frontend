import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';
import * as filmsJson from './films.json';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'films-main',
  imports: [CardComponent],
  templateUrl: './films-main.component.html',
  styleUrl: './films-main.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmsMainComponent {
  public films = signal(filmsJson.results.filter((item, index) => index <= 4));

  constructor() {}
}
