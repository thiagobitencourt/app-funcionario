import { EnumFilial } from "./filial.enum";

export class Cargo {
  numeroRegistro: number;
  nome: string;
}

export interface Funcionario {
  nome: string | number;
  filial: EnumFilial;
  dataAdmissao: Date;
  cargo: string;
  salario: number;
  ferias?: boolean;
  demitio?: boolean;
}
