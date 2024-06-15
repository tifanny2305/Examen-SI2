import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCMComponent } from './editar-cm.component';

describe('EditarCMComponent', () => {
  let component: EditarCMComponent;
  let fixture: ComponentFixture<EditarCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarCMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
