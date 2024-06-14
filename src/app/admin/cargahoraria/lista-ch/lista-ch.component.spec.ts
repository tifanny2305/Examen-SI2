import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaChComponent } from './lista-ch.component';

describe('ListaChComponent', () => {
  let component: ListaChComponent;
  let fixture: ComponentFixture<ListaChComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaChComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaChComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
