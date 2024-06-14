import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarhComponent } from './editarh.component';

describe('EditarhComponent', () => {
  let component: EditarhComponent;
  let fixture: ComponentFixture<EditarhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
