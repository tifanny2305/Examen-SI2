import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarModComponent } from './editar-mod.component';

describe('EditarModComponent', () => {
  let component: EditarModComponent;
  let fixture: ComponentFixture<EditarModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarModComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
