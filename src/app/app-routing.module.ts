import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { ListaLinhasComponent } from './linhas/lista-linhas/lista-linhas.component';
import { DetalharLinhaComponent } from './linhas/detalhar-linha/detalhar-linha.component';
import { CompartilharComponent } from './compartilhar/compartilhar.component';

const routes: Routes = [
  {
    path:'linhas', 
    component:ListaLinhasComponent
  },
  {
    path: 'linhas/:id', 
    component: DetalharLinhaComponent
  },
  {
    path:'compartilhar',
    component: CompartilharComponent
  },
  {
    path:'',
    redirectTo:'/linhas',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    Angulartics2Module.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
