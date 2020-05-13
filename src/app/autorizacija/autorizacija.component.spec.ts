import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AUTORIZACIJAComponent } from './autorizacija.component';

describe('AUTORIZACIJAComponent', () => {
  let component: AUTORIZACIJAComponent;
  let fixture: ComponentFixture<AUTORIZACIJAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AUTORIZACIJAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AUTORIZACIJAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
