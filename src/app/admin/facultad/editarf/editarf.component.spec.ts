import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarfComponent } from './editarf.component';

describe('EditarfComponent', () => {
  let component: EditarfComponent;
  let fixture: ComponentFixture<EditarfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
