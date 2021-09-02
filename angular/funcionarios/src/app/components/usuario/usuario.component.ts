import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: Usuario; // undefined

  constructor(
    private router: Router,
    private autenticacao: AutenticacaoService
  ) {}
  
  ngOnInit(): void {
    // Quando o componente for inicializado
    this.usuario = this.autenticacao.obterUsuarioLogado();
  }

  cadastrarUsuario() {
    // Mudar pra uma nova rota, página
    this.router.navigate(['cadastro-usuario']);
  }

  autenticar() {
    if (!this.usuario) {
      
      // Observable
      this.autenticacao.fazerLogin('qualquercoisa', 'admin')
        .subscribe((usuario: Usuario) => {
          console.log('ESTOU NO COMPONENTE - Tenho um usuário: ', usuario);

          this.usuario = usuario;

        });

      console.log('Componente não ppara... segue a vida!');
    } else {
      this.autenticacao.fazerLogout();
      this.usuario = null;
    }
  }
}
