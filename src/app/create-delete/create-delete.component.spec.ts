import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeleteComponent } from './create-delete.component';

describe('CreateDeleteComponent', () => {
  let component: CreateDeleteComponent;
  let fixture: ComponentFixture<CreateDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
