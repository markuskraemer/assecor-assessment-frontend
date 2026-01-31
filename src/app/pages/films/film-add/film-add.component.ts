import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OverlayService } from '../../../core/services/overlay.service';

@Component({
  selector: 'film-add',
  imports: [ReactiveFormsModule],
  templateUrl: './film-add.component.html',
  styleUrl: './film-add.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmAddComponent {
  private readonly fb = inject(FormBuilder);
  private readonly overlayService = inject(OverlayService);

  public readonly producers = ['George Lucas', 'Steven Spielberg', 'Christopher Nolan'];

  public readonly filmForm = this.fb.group({
    title: ['', Validators.required],
    director: [''],
    produzent: ['George Lucas', Validators.required],
    erscheinungsdatum: ['', [Validators.pattern(/^\d{4}$/)]],
    beschreibung: [''],
  });

  public onCancel() {
    this.overlayService.closeOverlay();
  }

  public onSubmit() {
    if (this.filmForm.valid) {
      this.overlayService.closeOverlay();
    } else {
      this.filmForm.markAllAsTouched();
    }
  }
}
