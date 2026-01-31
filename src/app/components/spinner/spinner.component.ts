import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'spinner',
  imports: [],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {

}
