import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { StandardButtonComponent } from '../../../../components/standard-button/standard-button.component';
import { SwapiStore } from '../../../../core/store/swapi.store';
import { extractId } from '../../../../core/utils/utls';

@Component({
  selector: 'details-buttons-row',
  imports: [StandardButtonComponent],
  templateUrl: './details-buttons-row.component.html',
  styleUrl: './details-buttons-row.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsButtonsRowComponent {
  @Input() public buttonLabels: string[] = [];
  @Input() public label = '';
  @Input() public set urls(value: string[]) {
    this._urls.set(value.slice(0, this.buttonCount));
  }

  @Output() public readonly addClick = new EventEmitter<void>();
  @Output() public readonly labelButtonClick = new EventEmitter<number>();

  public readonly store = inject(SwapiStore);

  private readonly buttonCount = 4;
  private readonly _urls = signal<string[]>([]);
  public readonly _buttonLabels = computed(() => {
    return this._urls().map((url) => this.store.filmList()[extractId(url)]);
  });

  public onAddClick() {
    this.addClick.emit();
  }

  public onLabelButtonClick(idx: number) {
    this.labelButtonClick.next(idx);
  }
}
