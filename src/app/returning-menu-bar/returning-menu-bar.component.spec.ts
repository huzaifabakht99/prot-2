import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturningMenuBarComponent } from './returning-menu-bar.component';

describe('ReturningMenuBarComponent', () => {
  let component: ReturningMenuBarComponent;
  let fixture: ComponentFixture<ReturningMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturningMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturningMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
