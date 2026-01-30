import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { StandardButtonComponent } from '../../../../components/standard-button/standard-button.component';

@Component({
  selector: 'details-buttons-row',
  imports: [StandardButtonComponent],
  templateUrl: './details-buttons-row.component.html',
  styleUrl: './details-buttons-row.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsButtonsRowComponent {
  public readonly buttonLabels = signal<string[]>([]);

  @Input() public label = '';
  @Input() public set urls(value: string[]) {
    this.buttonLabels.set(value.slice(0, 5));
  }
}
