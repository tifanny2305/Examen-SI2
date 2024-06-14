import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearModComponent } from './crear-mod.component';

describe('CrearModComponent', () => {
  let component: CrearModComponent;
  let fixture: ComponentFixture<CrearModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearModComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
