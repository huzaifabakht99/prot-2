import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFormGuestComponent } from './main-form-guest.component';

describe('MainFormGuestComponent', () => {
  let component: MainFormGuestComponent;
  let fixture: ComponentFixture<MainFormGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFormGuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFormGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
