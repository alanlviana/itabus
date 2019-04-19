import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaHorariosComponent } from './linhas/lista-horarios/lista-horarios.component';

const routes: Routes = [
  {
    path:'linhas', 
    component:ListaHorariosComponent
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
