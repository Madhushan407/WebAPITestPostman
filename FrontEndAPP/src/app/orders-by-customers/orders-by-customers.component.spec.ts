import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersByCustomersComponent } from './orders-by-customers.component';

describe('OrdersByCustomersComponent', () => {
  let component: OrdersByCustomersComponent;
  let fixture: ComponentFixture<OrdersByCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersByCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersByCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
