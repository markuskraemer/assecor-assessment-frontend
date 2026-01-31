import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NavService {
  private readonly router = inject(Router);

  // draft: better reference by Id.
  public gotoDetails(page: 'films' | 'characters' | 'planets', idx: number) {
    this.gotoDetailsById(page, String(idx + 1));
  }

  public gotoDetailsById(page: 'films' | 'characters' | 'planets', id: string) {
    this.router.navigate([page, 'details', id]);
  }
}
