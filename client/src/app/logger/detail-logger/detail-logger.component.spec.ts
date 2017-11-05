import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLoggerComponent } from './detail-logger.component';

describe('DetailLoggerComponent', () => {
  let component: DetailLoggerComponent;
  let fixture: ComponentFixture<DetailLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
