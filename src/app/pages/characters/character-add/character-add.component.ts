import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { OverlayService } from '../../../core/services/overlay.service';

@Component({
  selector: 'character-add',
  imports: [ReactiveFormsModule],
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.scss',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
  private readonly fb = inject(FormBuilder);
  private readonly overlayService = inject(OverlayService);

  public readonly eyeColors = ['Gelb', 'Grün', 'Blau'];
  public readonly genders = ['Male', 'Female', 'unknown', 'n/a'];

  public readonly form = this.fb.group({
    name: ['', Validators.required],
    director: [''],
    eyeColor: [this.eyeColors[0], Validators.required],
    beschreibung: [''],
    height: [''],
    mass: [''],
    hairColor: [''],
    birthYear: [''],
    gender: [this.genders[0]],
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
