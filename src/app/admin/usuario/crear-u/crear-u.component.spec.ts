import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUComponent } from './crear-u.component';

describe('CrearUComponent', () => {
  let component: CrearUComponent;
  let fixture: ComponentFixture<CrearUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
