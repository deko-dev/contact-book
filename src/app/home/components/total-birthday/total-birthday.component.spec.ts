import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBirthdayComponent } from './total-birthday.component';

describe('TotalBirthdayComponent', () => {
  let component: TotalBirthdayComponent;
  let fixture: ComponentFixture<TotalBirthdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalBirthdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalBirthdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
