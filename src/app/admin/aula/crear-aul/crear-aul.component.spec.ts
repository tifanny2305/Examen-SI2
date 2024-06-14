import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearAulComponent } from './crear-aul.component';

describe('CrearAulComponent', () => {
  let component: CrearAulComponent;
  let fixture: ComponentFixture<CrearAulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearAulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearAulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
