import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListahComponent } from './listah.component';

describe('ListahComponent', () => {
  let component: ListahComponent;
  let fixture: ComponentFixture<ListahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListahComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
