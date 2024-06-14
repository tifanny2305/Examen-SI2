import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMaComponent } from './lista-ma.component';

describe('ListaMaComponent', () => {
  let component: ListaMaComponent;
  let fixture: ComponentFixture<ListaMaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaMaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
