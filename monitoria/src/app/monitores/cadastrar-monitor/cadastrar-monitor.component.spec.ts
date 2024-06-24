import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarMonitorComponent } from './cadastrar-monitor.component';

describe('CadastrarMonitorComponent', () => {
  let component: CadastrarMonitorComponent;
  let fixture: ComponentFixture<CadastrarMonitorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarMonitorComponent]
    });
    fixture = TestBed.createComponent(CadastrarMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
