import { Component, OnInit } from '@angular/core';
import { EnumFilial } from 'src/app/model/filial.enum';
import { Funcionario } from 'src/app/model/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})
export class ListaFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  funcionarioSelecionado: Funcionario;
  linkPaginaNoticia: string;

  // Precisa declara o serviço no contrutor
  constructor(private funcionarioService: FuncionarioService) {}

  ngOnInit() {
    this.funcionarios = this.obterFuncionarios();
  }

  selecionarFuncionario(funcionario: Funcionario) {
    this.funcionarioSelecionado = funcionario;
    this.linkPaginaNoticia = 'http://globo.com';
  }

  deselecionarFuncionario() {
    this.funcionarioSelecionado = undefined;
  }

  verDetalhes(funcionario: Funcionario) {
    alert('Funcionário: ' + funcionario.nome);
  }

  adicionarFuncionario() {
    // criar o objeto Funcionario e chamar o método
    // adicionarFuncionario(funcionario) do serviço

    const novoFuncionario = {
      nome: 'Lula',
      filial: EnumFilial.FILIAL_C,
      dataAdmissao: new Date('25/01/2002'),
      cargo: 'Presidente',
      salario: 10000
    };

    this.funcionarioService.adicionarFuncionario(novoFuncionario)
      .subscribe((funcionario: Funcionario) => {
        // Quando retornar - depois que salvou no backend
        this.funcionarios.push(funcionario);
      });
  }

  removerFuncionario(funcionario: Funcionario) {
    const indiceFuncionario = this.funcionarios.indexOf(funcionario);
    this.funcionarios.splice(indiceFuncionario, 1);

    // this.funcionarioService.removerFuncionario(funcionario.id)
      // .subscribe(())
      // quando voltar do backend - remover o funcionario da lista
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
