import { EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit, OnChanges, OnDestroy {
  // @Input() nomeFuncionario: string;
  // @Input() cargoFuncionario: string;
  // @Input() filial: EnumFilial;

  @Input() funcionario: Funcionario;
  @Output() deselecionarFuncionario = new EventEmitter();

  constructor() {}
  // Método de ciclo de vida

  // On init é executado - Logo depois que o componente é inicializado
  // É inicializado sempre que for aparecer na tela pro usuário
  ngOnInit(): void {
    console.log('Componente foi inicializado!');
    // Assim que for inicializado eu posso ir
    // no backend buscar alguma informação
  }

  ngOnChanges(valueChanged) {
    // Sempre que há alguma alteração
    // nos valores dos atributos do componente.
    console.log('O atributo funcionario mudou -> ', valueChanged);
  }

  ngOnDestroy() {
    // VAi ser executado Antes do componente ser REMOVIDO da tela
    console.log('Componente vai ser "destruido", ou seja, removido da tela');
  }

  deselecionar() {
    this.deselecionarFuncionario.emit();
  }
}
