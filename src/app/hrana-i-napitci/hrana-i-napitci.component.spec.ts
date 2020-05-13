import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRANAINAPITCIComponent } from './hrana-i-napitci.component';

describe('HRANAINAPITCIComponent', () => {
  let component: HRANAINAPITCIComponent;
  let fixture: ComponentFixture<HRANAINAPITCIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRANAINAPITCIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRANAINAPITCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
