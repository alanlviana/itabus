import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaLinhasComponent } from './lista-linhas/lista-linhas.component';
import { MatButtonModule,MatChipsModule, MatCardModule, MatListModule, MatIconModule, MatGridListModule, MatTabsModule} from '@angular/material';
import { DetalharLinhaComponent } from './detalhar-linha/detalhar-linha.component';
import { LinhasService } from './logic/linhas-service';
import { FlexLayoutModule } from '@angular/flex-layout';

  @NgModule({
  declarations: [ListaLinhasComponent, DetalharLinhaComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatChipsModule,
    FlexLayoutModule
  ],
  providers:[LinhasService]
})
export class LinhasModule { }
