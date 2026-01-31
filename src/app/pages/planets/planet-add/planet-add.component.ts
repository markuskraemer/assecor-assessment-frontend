import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OverlayService } from '../../../core/services/overlay.service';

@Component({
  selector: 'planet-add',
  imports: [ReactiveFormsModule],
  templateUrl: './planet-add.component.html',
  styleUrl: '../../shared/styles/forms.shared.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanetAddComponent {
  private readonly fb = inject(FormBuilder);
  private readonly overlayService = inject(OverlayService);

  public readonly producers = ['George Lucas', 'Gary Kurtz', 'Rick McCallum'];
  public readonly types = ['Desert Planet', 'Water Planet'];

  public readonly form = this.fb.group({
    name: ['', Validators.required],
    director: [''],
    producer: [this.producers[0], Validators.required],
    type: [this.types[0]],
    description: [''],
  });

  public onCancel() {
    this.overlayService.closeOverlay();
  }

  public onSubmit() {
    if (this.form.valid) {
      this.overlayService.closeOverlay();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
