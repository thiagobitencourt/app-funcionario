import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilialPipe } from './pipes/filial.pipe';
import { FuncionarioComponent } from './components/funcionario/funcionario.component';


import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { UsuarioLogadoComponent } from './components/usuario-logado/usuario-logado.component';
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    FilialPipe,
    FuncionarioComponent,
    UsuarioLogadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
