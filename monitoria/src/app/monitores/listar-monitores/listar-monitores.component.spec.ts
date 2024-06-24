import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMonitoresComponent } from './listar-monitores.component';

describe('ListarMonitoresComponent', () => {
  let component: ListarMonitoresComponent;
  let fixture: ComponentFixture<ListarMonitoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarMonitoresComponent]
    });
    fixture = TestBed.createComponent(ListarMonitoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
