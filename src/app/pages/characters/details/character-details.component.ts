import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  Signal,
  ViewEncapsulation,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { DetailsButtonsRowComponent } from '../../../components/details-buttons-row/details-buttons-row.component';
import { SlideshowComponent } from '../../../components/slideshow/slideshow.component';
import { getCharacterImageSrc } from '../../shared/utils/imageUtils';
import { OverlayService } from '../../../core/services/overlay.service';
import { SwapiStore } from '../../../core/store/swapi.store';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { StandardButtonComponent } from '../../../components/standard-button/standard-button.component';
import { extractId, isString } from '../../../core/utils/utls';
import { NavService } from '../../../core/services/nav.service';

@Component({
  selector: 'character-details',
  imports: [
    DetailsButtonsRowComponent,
    SlideshowComponent,
    SpinnerComponent,
    StandardButtonComponent,
  ],
  templateUrl: './character-details.component.html',
  styleUrl: '../../shared/styles/page-details.shared.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  public readonly overlayService = inject(OverlayService);
  public readonly store = inject(SwapiStore);
  public readonly navService = inject(NavService);

  public readonly getCharacterImageSrc = getCharacterImageSrc;

  public readonly id = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
      filter((value) => isString(value)),
      map((v) => parseInt(v)),
    ),
  ) as Signal<number>;

  public readonly details = computed(() => this.store.getCharacterById(this.id()));

  public readonly getHomeworld = computed(() => {
    const homeworld = this.details()?.homeworld;
    if (homeworld) {
      return this.store.getPlanetByUrl(homeworld);
    }
    return undefined;
  });

  public gotoHomeworldPlanet() {
    const homeworld = this.details()?.homeworld;
    if (homeworld) {
      this.navService.gotoDetailsById('planets', String(extractId(homeworld)));
    }
  }
}
