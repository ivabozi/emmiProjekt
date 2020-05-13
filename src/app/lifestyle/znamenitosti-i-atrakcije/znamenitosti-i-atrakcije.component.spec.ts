import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZnamenitostiIAtrakcijeComponent } from './znamenitosti-i-atrakcije.component';

describe('ZnamenitostiIAtrakcijeComponent', () => {
  let component: ZnamenitostiIAtrakcijeComponent;
  let fixture: ComponentFixture<ZnamenitostiIAtrakcijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZnamenitostiIAtrakcijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZnamenitostiIAtrakcijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
