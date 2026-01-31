import { inject, Injectable } from '@angular/core';
import { OverlayType } from '../model/overlay.types';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class OverlayService {
  private readonly router = inject(Router);

  public openOverlay(overlay: OverlayType) {
    this.router.navigate([{ outlets: { overlay } }]);
  }

  public closeOverlay() {
    this.router.navigate([{ outlets: { overlay: null } }]);
  }
}
