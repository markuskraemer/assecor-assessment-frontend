import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() public imageSrc = '';
  @Input() public label = '';
  @Input() public description = '';
}
