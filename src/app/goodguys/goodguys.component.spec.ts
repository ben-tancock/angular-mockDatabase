import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodguysComponent } from './goodguys.component';

describe('GoodguysComponent', () => {
  let component: GoodguysComponent;
  let fixture: ComponentFixture<GoodguysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodguysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodguysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
