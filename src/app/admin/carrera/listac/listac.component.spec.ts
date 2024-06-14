import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacComponent } from './listac.component';

describe('ListacComponent', () => {
  let component: ListacComponent;
  let fixture: ComponentFixture<ListacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListacComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
