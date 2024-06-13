import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarGesComponent } from './editar-ges.component';

describe('EditarGesComponent', () => {
  let component: EditarGesComponent;
  let fixture: ComponentFixture<EditarGesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarGesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarGesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
