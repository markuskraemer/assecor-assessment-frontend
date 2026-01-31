import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { getPlanetImageSrc } from '../../shared/utils/imageUtils';
import { SwapiStore } from '../../../core/store/swapi.store';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { extractId } from '../../../core/utils/utls';

@Component({
  selector: 'planet-list',
  imports: [CardComponent, SpinnerComponent],
  templateUrl: './planet-list.component.html',
  styleUrl: '../../shared/page-list.shared.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetListComponent {
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  public readonly store = inject(SwapiStore);

  public readonly list = this.store.planetList;

  public showDetails(url: string) {
    const idx = extractId(url);
    if (idx >= 0) {
      this.router.navigate(['details', String(idx)], { relativeTo: this.route });
    }
  }

  public getImageSrc(url: string) {
    return getPlanetImageSrc(extractId(url));
  }
}
