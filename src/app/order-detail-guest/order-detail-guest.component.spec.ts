import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailGuestComponent } from './order-detail-guest.component';

describe('OrderDetailGuestComponent', () => {
  let component: OrderDetailGuestComponent;
  let fixture: ComponentFixture<OrderDetailGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailGuestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
