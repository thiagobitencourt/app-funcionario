import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-logado',
  templateUrl: './usuario-logado.component.html',
  styleUrls: ['./usuario-logado.component.css']
})
export class UsuarioLogadoComponent implements OnInit {
  @Input() usuario;

  constructor() {}
  ngOnInit(): void {}
}
