import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLinhasComponent } from './lista-linhas.component';

describe('ListaLinhasComponent', () => {
  let component: ListaLinhasComponent;
  let fixture: ComponentFixture<ListaLinhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaLinhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaLinhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
