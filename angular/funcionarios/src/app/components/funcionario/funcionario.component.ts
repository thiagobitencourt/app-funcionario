import { EventEmitter, OnChanges, OnDestroy } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Funcionario } from 'src/app/model/funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit, OnChanges, OnDestroy {
  @Input() funcionario: Funcionario;
  @Output() deselecionarFuncionario = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    console.log('Componente foi inicializado!');
  }

  ngOnChanges(valueChanged) {
    console.log('O atributo funcionario mudou -> ', valueChanged);
  }

  ngOnDestroy() {
    console.log('Componente vai ser "destruido", ou seja, removido da tela');
  }

  deselecionar() {
    this.deselecionarFuncionario.emit();
  }
}
