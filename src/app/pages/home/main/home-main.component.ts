import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'home-main',
  imports: [],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMainComponent {}
