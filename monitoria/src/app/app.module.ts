import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastrarMonitorComponent } from './monitores/cadastrar-monitor/cadastrar-monitor.component';
import { ListarMonitoresComponent } from './monitores/listar-monitores/listar-monitores.component';
import { CadastrarDisponibilidadeComponent } from './monitores/cadastrar-disponibilidade/cadastrar-disponibilidade.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarMonitorComponent,
    ListarMonitoresComponent,
    CadastrarDisponibilidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
