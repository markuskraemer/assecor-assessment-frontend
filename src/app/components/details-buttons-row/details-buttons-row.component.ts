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
import { StandardButtonComponent } from '../standard-button/standard-button.component';
import { SwapiStore } from '../../core/store/swapi.store';
import { extractId } from '../../core/utils/utls';

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

  @Output() public readonly addClick = new EventEmitter<void>();
  @Output() public readonly labelButtonClick = new EventEmitter<number>();

  public readonly store = inject(SwapiStore);

  public onAddClick() {
    this.addClick.emit();
  }

  public onLabelButtonClick(idx: number) {
    this.labelButtonClick.next(idx);
  }
}
