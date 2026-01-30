import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'standard-button',
  imports: [],
  templateUrl: './standard-button.component.html',
  styleUrl: './standard-button.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardButtonComponent {
  @Input() public label = '';
}
