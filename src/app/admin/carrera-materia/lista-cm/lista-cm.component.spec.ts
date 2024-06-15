import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCMComponent } from './lista-cm.component';

describe('ListaCMComponent', () => {
  let component: ListaCMComponent;
  let fixture: ComponentFixture<ListaCMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaCMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
