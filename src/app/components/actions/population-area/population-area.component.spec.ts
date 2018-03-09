import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationAreaComponent } from './population-area.component';

describe('PopulationAreaComponent', () => {
  let component: PopulationAreaComponent;
  let fixture: ComponentFixture<PopulationAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
