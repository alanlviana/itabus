import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaHorariosComponent } from './lista-horarios.component';

describe('ListaHorariosComponent', () => {
  let component: ListaHorariosComponent;
  let fixture: ComponentFixture<ListaHorariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaHorariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaHorariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
