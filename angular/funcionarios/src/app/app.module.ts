import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilialPipe } from './pipes/filial.pipe';
import { FuncionarioComponent } from './components/funcionario/funcionario.component';
import { AutenticacaoService } from './services/autenticacao.service';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ListaFuncionariosComponent } from './components/lista-funcionarios/lista-funcionarios.component';
import { MenuComponent } from './components/menu/menu.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    FilialPipe,
    FuncionarioComponent,
    UsuarioComponent,
    UsuarioFormComponent,
    ListaFuncionariosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'cadastro-usuario', component: UsuarioFormComponent
      },
      {
        path: 'usuario', component: UsuarioComponent
      },
      {
        path: 'funcionarios',
        component: ListaFuncionariosComponent
      },
      {
        path: '**', component: ListaFuncionariosComponent
      }
    ])
  ],
  providers: [
    AutenticacaoService,
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
