import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

/*
  id?: number;
  nome: string;
  sobrenome: string;
  email: string;
  filial: EnumFilial;
  senha?: string;
*/

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.css']
})
export class UsuarioFormComponent implements OnInit {
  // campoInpuTexto: FormControl; // undefined
  // campoInpuNumero: FormControl; // undefined

  usuarioForm: FormGroup; // undefined

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    // this.campoInpuTexto = new FormControl('Valor inicial para o campo');
    // this.campoInpuNumero = new FormControl(25);

    this.usuarioForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      sobrenome: new FormControl(),
      email: new FormControl(null, [ Validators.email, Validators.required ]),
      filial: new FormControl(),
      senha: new FormControl(null, [Validators.required, Validators.minLength(5)])
    });
  }

  verValores() {
    const usuario = this.usuarioForm.getRawValue();
    console.log(usuario);
  }

  mudarValores() {
    // const usuario = {
    //   nome: 'Marcos',
    //   sobrenome: 'Aragão'
    // };

    // this.usuarioForm.patchValue(usuario);

    this.usuarioForm.controls.nome.setValue('Novo nome');
  }

  salvar() {
    // const texto = this.campoInpuTexto.value;
    // const numero = this.campoInpuNumero.value;
    // alert(`Text: ${texto} -- numero: ${numero}`);

    if (this.usuarioForm.valid) {  
      const usuario: Usuario = this.usuarioForm.getRawValue();

      this.usuarioService.salvarUsuario(usuario)
        .subscribe(() => {
          alert('Usuario cadastrado com sucesso!');
          this.usuarioForm.reset();
        });
    } else {
      console.error('Formulário inválido');
    }
  }

  mudarTexto() {
    // this.campoInpuTexto.setValue('O novo texto do campo');
    // this.campoInpuNumero.setValue(168);
  }
}
