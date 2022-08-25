import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInReturningUserComponent } from './sign-in-returning-user.component';

describe('SignInReturningUserComponent', () => {
  let component: SignInReturningUserComponent;
  let fixture: ComponentFixture<SignInReturningUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInReturningUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInReturningUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
