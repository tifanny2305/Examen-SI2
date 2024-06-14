import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAsisComponent } from './editar-asis.component';

describe('EditarAsisComponent', () => {
  let component: EditarAsisComponent;
  let fixture: ComponentFixture<EditarAsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarAsisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarAsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
