import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './app-footer.component.html',
  styleUrl: './app-footer.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppFooterComponent {

}
