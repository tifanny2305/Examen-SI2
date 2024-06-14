import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMaComponent } from './editar-ma.component';

describe('EditarMaComponent', () => {
  let component: EditarMaComponent;
  let fixture: ComponentFixture<EditarMaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarMaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarMaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
