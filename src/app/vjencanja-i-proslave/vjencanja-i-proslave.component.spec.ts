import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VjencanjaIProslaveComponent } from './vjencanja-i-proslave.component';

describe('VjencanjaIProslaveComponent', () => {
  let component: VjencanjaIProslaveComponent;
  let fixture: ComponentFixture<VjencanjaIProslaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VjencanjaIProslaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VjencanjaIProslaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
