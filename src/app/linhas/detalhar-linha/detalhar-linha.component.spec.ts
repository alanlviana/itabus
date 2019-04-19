import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharLinhaComponent } from './detalhar-linha.component';

describe('DetalharLinhaComponent', () => {
  let component: DetalharLinhaComponent;
  let fixture: ComponentFixture<DetalharLinhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharLinhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharLinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
