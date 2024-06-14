import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAulComponent } from './lista-aul.component';

describe('ListaAulComponent', () => {
  let component: ListaAulComponent;
  let fixture: ComponentFixture<ListaAulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaAulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaAulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
