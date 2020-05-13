import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodjendaniComponent } from './rodjendani.component';

describe('RodjendaniComponent', () => {
  let component: RodjendaniComponent;
  let fixture: ComponentFixture<RodjendaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodjendaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodjendaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
