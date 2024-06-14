import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcComponent } from './editarc.component';

describe('EditarcComponent', () => {
  let component: EditarcComponent;
  let fixture: ComponentFixture<EditarcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
