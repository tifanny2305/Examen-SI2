import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCMComponent } from './crear-cm.component';

describe('CrearCMComponent', () => {
  let component: CrearCMComponent;
  let fixture: ComponentFixture<CrearCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearCMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
