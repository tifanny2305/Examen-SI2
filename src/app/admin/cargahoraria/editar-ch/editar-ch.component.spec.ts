import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarChComponent } from './editar-ch.component';

describe('EditarChComponent', () => {
  let component: EditarChComponent;
  let fixture: ComponentFixture<EditarChComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarChComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
