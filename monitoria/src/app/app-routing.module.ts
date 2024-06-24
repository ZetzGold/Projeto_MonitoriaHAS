import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarDisponibilidadeComponent } from './monitores/cadastrar-disponibilidade/cadastrar-disponibilidade.component';
import { CadastrarMonitorComponent } from './monitores/cadastrar-monitor/cadastrar-monitor.component';
import { ListarMonitoresComponent } from './monitores/listar-monitores/listar-monitores.component';

const routes: Routes = [
  {path:'', component: ListarMonitoresComponent},
  {path:'cadastro', component: CadastrarMonitorComponent},
  {path:'cadastro/disponibilidade', component: CadastrarDisponibilidadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
