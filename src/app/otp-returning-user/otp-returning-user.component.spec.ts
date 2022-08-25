import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpReturningUserComponent } from './otp-returning-user.component';

describe('OtpReturningUserComponent', () => {
  let component: OtpReturningUserComponent;
  let fixture: ComponentFixture<OtpReturningUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtpReturningUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtpReturningUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
