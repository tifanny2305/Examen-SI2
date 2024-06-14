import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearMaComponent } from './crear-ma.component';

describe('CrearMaComponent', () => {
  let component: CrearMaComponent;
  let fixture: ComponentFixture<CrearMaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearMaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearMaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
