import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  inject,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-main',
  imports: [],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeMainComponent {
  private readonly router = inject(Router);

  @HostListener('click')
  public onHostClick() {
    this.router.navigate(['films']);
  }
}
