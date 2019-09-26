import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSizeComponent } from './stock-size.component';

describe('StockSizeComponent', () => {
  let component: StockSizeComponent;
  let fixture: ComponentFixture<StockSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
