import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PONUDEComponent } from './ponude.component';

describe('PONUDEComponent', () => {
  let component: PONUDEComponent;
  let fixture: ComponentFixture<PONUDEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PONUDEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PONUDEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
