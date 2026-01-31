import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OverlayService } from '../../../core/services/overlay.service';

@Component({
  selector: 'film-add',
  imports: [ReactiveFormsModule],
  templateUrl: './film-add.component.html',
  styleUrl: '../../shared/styles/forms.shared.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmAddComponent {
  private readonly fb = inject(FormBuilder);
  private readonly overlayService = inject(OverlayService);

  public readonly producers = ['George Lucas', 'Gary Kurtz', 'Rick McCallum'];

  public readonly filmForm = this.fb.group({
    title: ['', Validators.required],
    director: [''],
    produzent: [this.producers[0], Validators.required],
    erscheinungsdatum: ['', [Validators.pattern(/^\d{4}$/)]],
    descriptipon: [''],
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
