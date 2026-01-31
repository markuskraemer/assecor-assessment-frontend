import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'slideshow',
  imports: [],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SlideshowComponent {
  @Input() public imageSrc = '';
}
