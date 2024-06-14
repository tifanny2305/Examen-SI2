import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAComponent } from './crear-a.component';

describe('CrearAComponent', () => {
  let component: CrearAComponent;
  let fixture: ComponentFixture<CrearAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
