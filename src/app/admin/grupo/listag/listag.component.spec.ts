import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagComponent } from './listag.component';

describe('ListagComponent', () => {
  let component: ListagComponent;
  let fixture: ComponentFixture<ListagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
