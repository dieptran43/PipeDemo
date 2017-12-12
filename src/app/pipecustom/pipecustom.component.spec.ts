import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipecustomComponent } from './pipecustom.component';

describe('PipecustomComponent', () => {
  let component: PipecustomComponent;
  let fixture: ComponentFixture<PipecustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipecustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipecustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
