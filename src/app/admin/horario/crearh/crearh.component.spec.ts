import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearhComponent } from './crearh.component';

describe('CrearhComponent', () => {
  let component: CrearhComponent;
  let fixture: ComponentFixture<CrearhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearhComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
