import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaLinhasComponent } from './lista-linhas/lista-linhas.component';

import { MatButtonModule, MatCardModule, MatListModule, MatIconModule, MatGridListModule} from '@angular/material';
import { DetalharLinhaComponent } from './detalhar-linha/detalhar-linha.component';
import { LinhasService } from './logic/linhas-service';

  @NgModule({
  declarations: [ListaLinhasComponent, DetalharLinhaComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  providers:[LinhasService]
})
export class LinhasModule { }
