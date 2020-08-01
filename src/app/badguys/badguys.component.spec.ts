import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadguysComponent } from './badguys.component';

describe('BadguysComponent', () => {
  let component: BadguysComponent;
  let fixture: ComponentFixture<BadguysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadguysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadguysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
