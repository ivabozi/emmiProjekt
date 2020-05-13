import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LIFESTYLEComponent } from './lifestyle.component';

describe('LIFESTYLEComponent', () => {
  let component: LIFESTYLEComponent;
  let fixture: ComponentFixture<LIFESTYLEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LIFESTYLEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LIFESTYLEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
