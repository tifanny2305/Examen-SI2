import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreargComponent } from './crearg.component';

describe('CreargComponent', () => {
  let component: CreargComponent;
  let fixture: ComponentFixture<CreargComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreargComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
