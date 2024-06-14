import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAsisComponent } from './lista-asis.component';

describe('ListaAsisComponent', () => {
  let component: ListaAsisComponent;
  let fixture: ComponentFixture<ListaAsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAsisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaAsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
