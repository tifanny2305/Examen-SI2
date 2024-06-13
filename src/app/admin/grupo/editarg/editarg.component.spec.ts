import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditargComponent } from './editarg.component';

describe('EditargComponent', () => {
  let component: EditargComponent;
  let fixture: ComponentFixture<EditargComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditargComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
