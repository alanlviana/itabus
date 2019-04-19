import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaLinhasComponent } from './linhas/lista-linhas/lista-linhas.component';
import { DetalharLinhaComponent } from './linhas/detalhar-linha/detalhar-linha.component';

const routes: Routes = [
  {
    path:'linhas', 
    component:ListaLinhasComponent
  },
  {
    path: 'linhas/:id', component: DetalharLinhaComponent
  },
  {
    path:'',
    redirectTo:'/linhas',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
