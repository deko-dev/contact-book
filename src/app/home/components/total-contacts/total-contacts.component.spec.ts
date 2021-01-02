import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalContactsComponent } from './total-contacts.component';

describe('TotalContactsComponent', () => {
  let component: TotalContactsComponent;
  let fixture: ComponentFixture<TotalContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
