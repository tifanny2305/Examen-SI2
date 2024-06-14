import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAComponent } from './editar-a.component';

describe('EditarAComponent', () => {
  let component: EditarAComponent;
  let fixture: ComponentFixture<EditarAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
