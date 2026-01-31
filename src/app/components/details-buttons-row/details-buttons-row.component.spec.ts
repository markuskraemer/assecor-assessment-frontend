import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsButtonsRowComponent } from './details-buttons-row.component';

describe('DetailsButtonsRowComponent', () => {
  let component: DetailsButtonsRowComponent;
  let fixture: ComponentFixture<DetailsButtonsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsButtonsRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsButtonsRowComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
