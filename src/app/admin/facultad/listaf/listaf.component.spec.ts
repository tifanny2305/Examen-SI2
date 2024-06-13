import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListafComponent } from './listaf.component';

describe('ListafComponent', () => {
  let component: ListafComponent;
  let fixture: ComponentFixture<ListafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListafComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
