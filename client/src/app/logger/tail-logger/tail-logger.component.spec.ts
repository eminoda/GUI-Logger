import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TailLoggerComponent } from './tail-logger.component';

describe('TailLoggerComponent', () => {
  let component: TailLoggerComponent;
  let fixture: ComponentFixture<TailLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
