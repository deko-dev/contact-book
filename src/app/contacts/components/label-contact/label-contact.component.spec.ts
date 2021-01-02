import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelContactComponent } from './label-contact.component';

describe('LabelContactComponent', () => {
  let component: LabelContactComponent;
  let fixture: ComponentFixture<LabelContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
