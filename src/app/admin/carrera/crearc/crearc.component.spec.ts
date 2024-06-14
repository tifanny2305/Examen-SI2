import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearcComponent } from './crearc.component';

describe('CrearcComponent', () => {
  let component: CrearcComponent;
  let fixture: ComponentFixture<CrearcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
