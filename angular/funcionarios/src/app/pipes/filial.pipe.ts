import { Pipe, PipeTransform } from '@angular/core';
import { EnumFilial } from '../model/filial.enum';


// {{ funcionario.filial | filial }}

@Pipe({
  name: 'filial'
})
export class FilialPipe implements PipeTransform {
  transform(filial: EnumFilial, mostrarNumero: boolean): string {
    let filialString: string;
    switch(filial) {
      case EnumFilial.MATRIZ: {
        filialString = mostrarNumero ? '01' : 'Matriz';
        break;
      }
      case EnumFilial.FILIA_A: {
        filialString = mostrarNumero ? '02' : 'Filial a';
        break;
      }
      case EnumFilial.FILIAL_B: {
        filialString = mostrarNumero ? '03' : 'Filial b';
        break;
      }
      default: {
        filialString = mostrarNumero ? '00' : 'Filial desconhecida';
      }
    }

    return filialString;
  }

}
