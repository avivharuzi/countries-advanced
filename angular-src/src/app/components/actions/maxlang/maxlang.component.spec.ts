import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxlangComponent } from './maxlang.component';

describe('MaxlangComponent', () => {
  let component: MaxlangComponent;
  let fixture: ComponentFixture<MaxlangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxlangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxlangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
