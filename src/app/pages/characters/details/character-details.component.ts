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
import { getCharacterImageSrc } from '../../shared/utils/imageUtils';
import { OverlayService } from '../../../core/services/overlay.service';
import { SwapiStore } from '../../../core/store/swapi.store';
import { SpinnerComponent } from '../../../components/spinner/spinner.component';
import { StandardButtonComponent } from '../../../components/standard-button/standard-button.component';
import { isString } from '../../../core/utils/utls';

@Component({
  selector: 'character-details',
  imports: [
    DetailsButtonsRowComponent,
    SlideshowComponent,
    SpinnerComponent,
    StandardButtonComponent,
  ],
  templateUrl: './character-details.component.html',
  styleUrl: '../../shared/page-details.shared.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterDetailsComponent {
  private readonly route = inject(ActivatedRoute);
  public readonly overlayService = inject(OverlayService);
  public readonly store = inject(SwapiStore);
  public readonly getCharacterImageSrc = getCharacterImageSrc;

  public readonly id = toSignal(
    this.route.paramMap.pipe(
      map((params) => params.get('id')),
      filter((value) => isString(value)),
      map((v) => parseInt(v)),
    ),
  ) as Signal<number>;

  public readonly details = computed(() => this.store.getCharacterById(this.id()));
}
