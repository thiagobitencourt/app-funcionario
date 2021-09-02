import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  // Importar o módulo HttpClientModule no arquivo app.module.ts
  constructor(private http: HttpClient) {}
  // github/thiagobitencourt/app-funcionario
  /*
  // Altere a interface funcionario para ter o atributo id
  obterFuncionarios(): Observable<Funcionario[]> {
    // GET
  }

  obterDadosFuncionario(id: number): Observable<Funcionario> {
    // GET - `URL/funcionarios/${id}`
  }

  removerFuncionario(id: number): Observable<Funcionario> {
    // DELETE - `URL/funcionarios/${id}`
  }

  */
  adicionarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    // POST
    return this.http.post<Funcionario>('', funcionario);
  }
}
