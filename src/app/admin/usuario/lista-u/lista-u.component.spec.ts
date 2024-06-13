import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUComponent } from './lista-u.component';

describe('ListaUComponent', () => {
  let component: ListaUComponent;
  let fixture: ComponentFixture<ListaUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
