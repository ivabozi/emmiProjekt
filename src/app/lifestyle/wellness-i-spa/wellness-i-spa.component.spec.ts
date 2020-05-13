import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WellnessISpaComponent } from './wellness-i-spa.component';

describe('WellnessISpaComponent', () => {
  let component: WellnessISpaComponent;
  let fixture: ComponentFixture<WellnessISpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellnessISpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WellnessISpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
