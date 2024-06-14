import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearChComponent } from './crear-ch.component';

describe('CrearChComponent', () => {
  let component: CrearChComponent;
  let fixture: ComponentFixture<CrearChComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearChComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
