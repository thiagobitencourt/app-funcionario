import { Component } from '@angular/core';
import { EnumFilial } from './model/filial.enum';
import { Funcionario } from './model/funcionario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nomeUsuarioLogado = 'MArcos paulo';

  /*
    string
    number
    boolean
    any -> qualquer um
    void -> vazio

    Object -> Interface, Enum, Class
    Array/Lista -> Depende do tipo da lista
    Function
  */

  funcionarios: Funcionario[] = []; // Array<number> - É uma má prática, prefira number[]

  funcionarioSelecionado: Funcionario;
  linkPaginaNoticia: string;
  classeLink: string = 'link-pagina-noticia';

  constructor() {
    this.funcionarios = this.obterFuncionarios();
  }

  selecionarFuncionario(funcionario: Funcionario) {
    this.funcionarioSelecionado = funcionario;

    funcionario.ferias = true;

    this.linkPaginaNoticia = 'http://globo.com';
    this.classeLink = 'link-funcionario-selecionado';
  }

  deselecionarFuncionario() {
    this.funcionarioSelecionado = undefined;
  }

  verDetalhes(funcionario: Funcionario) {
    alert('Funcionário: ' + funcionario.nome + ' admitido em ' + funcionario.dataAdmissao);
  }

  adicionarFuncionario() {
    this.funcionarios.push({
      nome: 'Lula',
      filial: EnumFilial.FILIAL_C,
      dataAdmissao: new Date('25/01/2002'),
      cargo: 'Presidente',
      salario: 10000
    });
  }

  removerFuncionario(funcionario: Funcionario) {
    const indiceFuncionario = this.funcionarios.indexOf(funcionario);
    this.funcionarios.splice(indiceFuncionario, 1);
  }

  removerUltimoFuncionario() {
    this.funcionarios.pop();
  }

  ajustarSalario(funcionario: Funcionario) {
    funcionario.salario *= 1.1;
  }

  private obterFuncionarios(): Funcionario[] {
    // Backend - trás uma lista de funcionários
    return [
      {
        nome: 'Marcio',
        filial: EnumFilial.MATRIZ,
        dataAdmissao: new Date('05-21-2021'),
        cargo: 'Desenvolvedor vscode',
        salario: 18598.57,
        ferias: true
      },
      {
        nome: 'Amanda',
        filial: EnumFilial.FILIA_A,
        dataAdmissao: new Date('10/02/2009'),
        cargo: 'Dona',
        salario: 642125
      },
      {
        nome: 'JUDAS escariotes',
        filial: EnumFilial.FILIAL_B,
        dataAdmissao: new Date(),
        cargo: 'CTO',
        salario: 602125
      }
    ];
  }
}
