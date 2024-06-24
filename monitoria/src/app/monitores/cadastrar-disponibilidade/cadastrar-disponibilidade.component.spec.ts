import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarDisponibilidadeComponent } from './cadastrar-disponibilidade.component';

describe('CadastrarDisponibilidadeComponent', () => {
  let component: CadastrarDisponibilidadeComponent;
  let fixture: ComponentFixture<CadastrarDisponibilidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarDisponibilidadeComponent]
    });
    fixture = TestBed.createComponent(CadastrarDisponibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
