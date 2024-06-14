import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAulComponent } from './editar-aul.component';

describe('EditarAulComponent', () => {
  let component: EditarAulComponent;
  let fixture: ComponentFixture<EditarAulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarAulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarAulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
