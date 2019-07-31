import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAnalyticsComponent } from './stock-analytics.component';

describe('StockAnalyticsComponent', () => {
  let component: StockAnalyticsComponent;
  let fixture: ComponentFixture<StockAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
