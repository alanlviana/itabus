import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinhasService } from '../logic/linhas-service';
import { LinhaOnibus } from '../logic/linha-onibus';
import { CalculadorProximoHorario } from '../logic/calculador-proximo-horario';

@Component({
  selector: 'app-lista-linhas',
  templateUrl: './lista-linhas.component.html',
  styleUrls: ['./lista-linhas.component.css']
})
export class ListaLinhasComponent implements OnInit {

  linhas: LinhaOnibus[];

  constructor(private router: Router, private data: LinhasService) { 

  }
  obterDetalhes(id) {

    this.router.navigate(['/linhas', id]);
  }

  atualizarLista(){
    this.data.getList(response => {
      this.linhas = response;
    });
  }

  ngOnInit() {
    this.atualizarLista();
  }

  ngOnDestroy(){
    
  }
}
