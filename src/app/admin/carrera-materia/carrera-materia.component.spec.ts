import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarreraMateriaComponent } from './carrera-materia.component';

describe('CarreraMateriaComponent', () => {
  let component: CarreraMateriaComponent;
  let fixture: ComponentFixture<CarreraMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarreraMateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarreraMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
