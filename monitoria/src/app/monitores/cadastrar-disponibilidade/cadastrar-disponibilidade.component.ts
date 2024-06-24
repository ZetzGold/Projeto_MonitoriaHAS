import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-disponibilidade',
  templateUrl: './cadastrar-disponibilidade.component.html',
  styleUrls: ['./cadastrar-disponibilidade.component.css']
})
export class CadastrarDisponibilidadeComponent {
  ocultarSenha:boolean = true;
  css:string = 'container';
  visivel:string = 'oculto';
  erro_visivel:string = 'erro_oculto';
  ocultarSenha2:boolean = true;
  constructor(private formularioReativo: FormBuilder){}

  cadastroForm = this.formularioReativo.group({
    id: this.formularioReativo.control('',[Validators.required]),
    nome: this.formularioReativo.control('',[Validators.required, Validators.maxLength(30)]),
    telefone: this.formularioReativo.control('',[Validators.required, Validators.minLength(2), Validators.maxLength(17)]),
    email: this.formularioReativo.control('',[Validators.required, Validators.email]),
    disciplinas: this.formularioReativo.control('', [Validators.required]),
  });

  onEnviar(){
    this.cadastroForm.markAllAsTouched(); // Marca todos os controles como tocados
    if (this.cadastroForm.valid) {
    }
  }
}
