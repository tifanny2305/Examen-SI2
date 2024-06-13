import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaGesComponent } from './lista-ges.component';

describe('ListaGesComponent', () => {
  let component: ListaGesComponent;
  let fixture: ComponentFixture<ListaGesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaGesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaGesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
