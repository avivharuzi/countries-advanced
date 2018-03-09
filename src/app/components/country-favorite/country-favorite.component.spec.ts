import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryFavoriteComponent } from './country-favorite.component';

describe('CountryFavoriteComponent', () => {
  let component: CountryFavoriteComponent;
  let fixture: ComponentFixture<CountryFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
