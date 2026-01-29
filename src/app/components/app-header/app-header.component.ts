import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { provideRouter, RouterOutlet, RouterLink, withHashLocation } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
  public readonly router = inject(Router);
}
