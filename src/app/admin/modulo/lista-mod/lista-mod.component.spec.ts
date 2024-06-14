import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaModComponent } from './lista-mod.component';

describe('ListaModComponent', () => {
  let component: ListaModComponent;
  let fixture: ComponentFixture<ListaModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaModComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
