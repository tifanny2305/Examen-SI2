import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearfComponent } from './crearf.component';

describe('CrearfComponent', () => {
  let component: CrearfComponent;
  let fixture: ComponentFixture<CrearfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
