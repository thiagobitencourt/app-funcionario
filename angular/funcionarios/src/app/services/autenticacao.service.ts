import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnumFilial } from '../model/filial.enum';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  private usuarioLogado: Usuario;

  constructor(private http: HttpClient) {}

  obterUsuarioLogado(): Usuario {
    return this.usuarioLogado;
  }

  fazerLogin(nomeUsuario: string, senha: string): Observable<Usuario> {
    // Assincrono
    // Observable
    return this.http.get<Usuario>("http://localhost:3000/usuarios/1");

    // if (this.isSenhaCorreta(senha)) {
    //   this.definirUsuarioLogado();
    //   return this.obterUsuarioLogado();
    // }
  }

  fazerLogout() {
    this.usuarioLogado = null;
    return null;
  }

  private isSenhaCorreta(senha: string): boolean {
    return senha === 'admin';
  }

  private definirUsuarioLogado() {
    this.usuarioLogado = {
      nome: 'Jaiminho',
      sobrenome: 'Carteiro',
      email: 'jaiminho@correios.com.br',
      filial: EnumFilial.MATRIZ
    };
  }
}
