import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearGesComponent } from './crear-ges.component';

describe('CrearGesComponent', () => {
  let component: CrearGesComponent;
  let fixture: ComponentFixture<CrearGesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearGesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearGesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
