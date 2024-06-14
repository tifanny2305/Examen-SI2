import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAsisComponent } from './crear-asis.component';

describe('CrearAsisComponent', () => {
  let component: CrearAsisComponent;
  let fixture: ComponentFixture<CrearAsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAsisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearAsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
